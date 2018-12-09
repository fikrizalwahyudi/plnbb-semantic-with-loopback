import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { switchMap } from 'rxjs/operators';
import { ReferensiKontrakPltuApi } from '../../../shared/sdk/services/custom/ReferensiKontrakPltu';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { promptDialog } from '../../../shared/modals/prompt.modal';

@Component({
  selector: 'app-mitra-kesanggupan-pasokan-browse',
  templateUrl: './mitra-kesanggupan-pasokan-browse.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan-browse.component.sass']
})
export class MitraKesanggupanPasokanBrowseComponent implements OnInit {

  fg:FormGroup
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  years = [];
  mitra: Mitra[];
  mitras:Mitra[];
  errorMsg: string;

  daftarKesanggupan
  daftarKontrak
  pltus

  constructor(
    private fb:FormBuilder, 
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kontrakApi:ReferensiKontrakApi,
    private kontrakPltuApi:ReferensiKontrakPltuApi,
    private kesanggupanApi:MitraKesanggupanApi
  ) 
  {
    for(let i=2018-10; i<2019; i++) {
      this.years.push(i)
    }

    //console.log(this.userApi.getCurrentId())
    this.daftarKontrak = this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).pipe(switchMap(data => {
      let mitra = data as Mitra

      return this.kontrakApi.find({where: {mitraId: mitra.id}, include: 'pltuPrincipals'}).map(records => {
        return records.map((entry:any) => {
          return {
            name: entry.nomorKontrak,
            value: entry.id,
            text: entry.nomorKontrak,
            item: entry
          }
        })
      })
    }))

    this.fg = this.fb.group({
      referensiKontrakId: [null, [Validators.required]],
      tujuanPltuId: [null, [Validators.required]],
      tglPengiriman: [null, [Validators.required]],
      jumlah: [null, [Validators.required]],
      harga: [null, [Validators.required]],
      mode: [null, [Validators.required]],
      keterangan: null
    })

    this.kesanggupanApi.find({where: {userId: this.userApi.getCurrentId()}, include: ['tujuanPltu', 'referensiKontrak']}).subscribe(data => {
      this.daftarKesanggupan = data

      console.log(data)
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

  save() {
    let model = this.fg.value

    model.userId = this.userApi.getCurrentId()

    //console.log(this.fg.value)
    this.kesanggupanApi.create(model).subscribe(() => {
      this.kesanggupanApi.find({where: {userId: this.userApi.getCurrentId()}}).subscribe(data => {
        this.daftarKesanggupan = data

        this.fg.reset()
      })
    })
  }

  onSelectKontrak(item) {
    this.fg.patchValue({referensiKontrakId: item})

    this.daftarKontrak.subscribe(data => {
      let kontrak = data.find(entry => entry.value === item)

      if(kontrak) {
        kontrak = kontrak.item

        this.kontrakPltuApi.find({where: {referensiKontrakId: kontrak.id}, include: 'pltu'}).subscribe(data => {
          this.pltus = data.map((entry:any) => {
            return entry.pltu
          })
        })
      }
    })
  }
}