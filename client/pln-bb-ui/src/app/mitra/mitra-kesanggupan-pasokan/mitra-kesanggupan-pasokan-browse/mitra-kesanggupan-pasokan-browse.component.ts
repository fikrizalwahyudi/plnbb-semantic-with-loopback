import { Component, OnInit } from '@angular/core';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import * as _ from 'lodash';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-browse',
  templateUrl: './mitra-kesanggupan-pasokan-browse.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan-browse.component.sass']
})
export class MitraKesanggupanPasokanBrowseComponent implements OnInit {
  
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  years = [];
  mitra: Mitra[];
  mitras:Mitra[];
  errorMsg: string;

  daftarKesanggupan
  daftarKontrak
  pltus

  constructor(
    private userApi:UserApi,
    private kesanggupanApi:MitraKesanggupanApi
  ) 
  {
    for(let i=2018-10; i<2019; i++) {
      this.years.push(i)
    }
    this.kesanggupanApi.find({where: {userId: this.userApi.getCurrentId()}, include: ['tujuanPltu', 'referensiKontrak']}).subscribe(data => {
      this.daftarKesanggupan = data

      console.log(data)
      let buffer:any = _.groupBy(data, (entry:MitraKesanggupan) => {
        let date = new Date(entry.tglPengiriman)
        return date.getMonth() + '/' + date.getFullYear()
      })

      for(var key in buffer) {
        let entry = buffer[key]
        buffer[key] = _.groupBy(entry, (entryI:MitraKesanggupan) => {
          return entryI.tujuanPltuId
        })
      }

      console.log(buffer)
    })
  }

  ngOnInit() {
  }

  delete(item) {
    promptDialog('Delete record kesanggupan?', 'this record will not be recoverable', () => {

    }, () => {})
  }

  lock(item) {
    this.kesanggupanApi.patchAttributes(item.id, {lock:true}).subscribe(() => {
      item.lock = true
    })
  }
}