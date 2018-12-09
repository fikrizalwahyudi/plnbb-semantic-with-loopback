import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { switchMap } from 'rxjs/operators';
import { ReferensiKontrakPltuApi } from '../../../shared/sdk/services/custom/ReferensiKontrakPltu';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';

@Component({
  selector: 'mitra-kesanggupan-pasokan-form',
  templateUrl: './mitra-kesanggupan-pasokan-form.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan-form.component.sass']
})
export class MitraKesanggupanPasokanFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
  errorMsg
  submitting

  daftarKesanggupan
  daftarKontrak
  pltus

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kontrakApi:ReferensiKontrakApi,
    private kontrakPltuApi:ReferensiKontrakPltuApi,
    private kesanggupanApi:MitraKesanggupanApi
  ) {
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
      keterangan: null,
      gcv: [null, [Validators.required]],
      tm: [null, [Validators.required]],
      ash: [null, [Validators.required]],
      ts: [null, [Validators.required]],
      hgi: [null, [Validators.required]],
      idt: [null, [Validators.required]],
      size1: [null, [Validators.required]],
      size2: [null, [Validators.required]],

    })
   }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    // console.log(this.fg.value)
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
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
