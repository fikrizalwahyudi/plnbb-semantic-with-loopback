import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { ReferensiKontrakApi } from '../../../shared/sdk';
import { switchMap } from 'rxjs/operators';
import { ReferensiKontrakPltuApi } from '../../../shared/sdk/services/custom/ReferensiKontrakPltu';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { environment } from '../../../../environments/environment';
import { MitraKesanggupanTambangApi, ReferensiKontrakTambangApi } from '../../../shared/sdk';
import * as _ from 'lodash';

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
  tambangs
  jettys

  id
  mitra
  st=[]

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kontrakApi:ReferensiKontrakApi,
    private kontrakPltuApi:ReferensiKontrakPltuApi,
    private kontrakTambangApi:ReferensiKontrakTambangApi,
    private kesanggupanApi:MitraKesanggupanApi,
    private tambangApi:MitraKesanggupanTambangApi
  ) {

    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe(data=>{
      console.log(data);
      this.mitra = data as Mitra
    })

    this.fg = this.fb.group({
      referensiKontrakId: [null, [Validators.required]],
      tujuanPltuId: [null, [Validators.required]],
      tglPengiriman: [null, [Validators.required]],
      jumlah: 0,
      harga: [null, [Validators.required]],
      mode: [null, [Validators.required]],
      keterangan: null,
      jenisKontrak: [null, [Validators.required]],
      jenisBatubara: [null, [Validators.required]],
      jettyId: null,
      sumberTambang: this.fb.array([
        this.fb.group({
          tambangId: [null, [Validators.required]],
          jumlahPasokanTambang: [null, [Validators.required]]
        })
      ])

    })
   }

  ngOnInit() {
    this.onInit.emit(this.fg)
    // this.onChanges()
  }

  calculateJumlah(val, index){
    if(val && this.st[index]){
      var total = 0;
      console.log(this.st[index], Number(val));
      if(this.st[index]){
        this.fg.value.sumberTambang[index].jumlahPasokanTambang = Number(val);
        this.fg.value.sumberTambang.map(each=>{
          total = total + Number(each.jumlahPasokanTambang)
          this.fg.patchValue({jumlah:total})
        })
      }
    }
    
  }

  save() {
    // console.log(this.fg.value)
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
  }

  onSelectKontrak(referensiKontrakId) {
    console.log(referensiKontrakId)
    this.kontrakApi.findById(referensiKontrakId, {include:[{pltuPrincipals:['pltu']}, {tambangPrincipals:['tambang']}, {jettyPrincipals:['jetty']}]}).subscribe((data:any)=>{
      console.log(data)
      if(this.fg.value.jenisKontrak == null){
        this.fg.patchValue({jenisKontrak:data.jenisKontrak})
      }
      this.pltus = data.pltuPrincipals.map((entry:any) => {
        return entry.pltu
      })
      this.tambangs = data.tambangPrincipals.map((entry:any) => {
        return entry.tambang
      })
      this.jettys = data.jettyPrincipals.map((entry:any)=>{
        return entry.jetty
      })
    })
  }

  addTambang(fg:FormGroup) {
    const sumberTambang = fg.get('sumberTambang') as FormArray
    // console.log(sumberTambang);
    sumberTambang.push(this.fb.group({
      tambangId: [null, [Validators.required]],
      jumlahPasokanTambang: [0, [Validators.required]]
    }))
    console.log(sumberTambang);
  }

  delTambang(i, fg) {
    const sumberTambang = fg.get('sumberTambang') as FormArray
    sumberTambang.removeAt(i)
  }

  get sumberTambang() { return this.fg.get('sumberTambang') as FormArray; }

  getKontrak = (q?) => {
    let filter = {
      limit: 10
    }

    if (!_.isEmpty(q))
      filter['where'] = { name: { like: `.*${q}.*`, options: 'i' }, mitraId: this.mitra.id}
      // filter['include'] = [{pltuPrincipals:['pltu']}, {tambangPrincipals:['tambang']}, {jettyPrincipals:['jetty']}]
    return this.kontrakApi.find(filter).map((data: any) => {
      return data.map(entry => {
        // console.log(entry);
        return {
          name: entry.nomorKontrak,
          value: entry.id
        }
      })
    });
  }

}
