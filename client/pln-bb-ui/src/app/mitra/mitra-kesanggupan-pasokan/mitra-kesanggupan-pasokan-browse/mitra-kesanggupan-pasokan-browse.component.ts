import { Component, OnInit } from '@angular/core';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import * as _ from 'lodash';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import * as moment from 'moment';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';

declare var $: any;

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-browse',
  templateUrl: './mitra-kesanggupan-pasokan-browse.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan-browse.component.sass']
})
export class MitraKesanggupanPasokanBrowseComponent implements OnInit {

  mitra: Mitra[];
  mitras: Mitra[];
  errorMsg: string;

  daftarKesanggupan
  daftarKontrak
  daftarPltu = {}

  constructor(
    private userApi: UserApi,
    private mitraApi: MitraApi,
    private kesanggupanApi: MitraKesanggupanApi
  ) {
    let now = new Date()
    now.setDate(1)
    let next = new Date()
    next.setDate(1)
    next.setMonth(now.getMonth() + 2)

    this.kesanggupanApi.find({ where: { 
      userId: this.userApi.getCurrentId(),
      tglPengiriman: {between: [now, next]}
    }, include: ['tujuanPltu', 'referensiKontrak', 'jetty'] }).subscribe(data => {
      let buffer: any = _.groupBy(data, (entry: MitraKesanggupan) => {
        let date = new Date(entry.tglPengiriman)
        return moment(date).format('MMMM YYYY')
      })

      for (var key in buffer) {
        let entry = buffer[key]
        buffer[key] = _.groupBy(entry, (entryI: MitraKesanggupan) => {
          this.daftarPltu[entryI.tujuanPltuId] = entryI.tujuanPltu

          return entryI.tujuanPltuId
        })
      }

      this.daftarKesanggupan = buffer
    })
  }

  ngOnInit() {
  }

  delete(item, key) {
    this.errorMsg = undefined
    console.log(item)
    console.log(key)
    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      // this.kesanggupanApi.deleteById(item.id).subscribe(data => {
      //   this.daftarKesanggupan[key] = this.daftarKesanggupan[key].filter(u => u.id !== item.id)
      // }, err => {
      //   this.errorMsg = err.message
      // })
    }, () => {})
  }
  
  // delete(item) {
  //   promptDialog('Delete record kesanggupan?', 'this record will not be recoverable', () => {

  //   }, () => { })
  // }

  

  lock(item) {
    this.kesanggupanApi.patchAttributes(item.id, { lock: true }).subscribe(() => {
      item.lock = true
    })
  }

  flip() {
    $('.shape')
      .shape('set next side', '.second.side')
      .shape('flip back');
  }

}