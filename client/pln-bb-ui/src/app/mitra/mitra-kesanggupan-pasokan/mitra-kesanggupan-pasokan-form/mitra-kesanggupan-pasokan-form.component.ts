import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraKesanggupanApi, ReferensiKontrakPltuApi, ReferensiKontrak, ReferensiKontrakApi, PltuApi,MitraKesanggupanTambangApi, ReferensiKontrakTambangApi, JettyApi, ReferensiKontrakJettyApi, TambangApi } from '../../../shared/sdk';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
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
  referensiKontrak:ReferensiKontrak

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
    private kontrakJettyApi:ReferensiKontrakJettyApi,
    private kesanggupanApi:MitraKesanggupanApi,
    private tambangApi:TambangApi,
    private pltuApi:PltuApi,
    private jettyApi:JettyApi
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
  }

  calculateJumlah(val, index){
    var total = 0;
    console.log(this.st[index], Number(val));
    if(val && this.st[index]){
      this.fg.value.sumberTambang[index].jumlahPasokanTambang = Number(val);
      this.fg.value.sumberTambang.map(each=>{
        total = total + Number(each.jumlahPasokanTambang)
        this.fg.patchValue({jumlah:total})
      })
    }

    return total;
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
      this.referensiKontrak = data as ReferensiKontrak
    })
  }

  addTambang(fg:FormGroup) {
    const sumberTambang = fg.get('sumberTambang') as FormArray
    // console.log(sumberTambang);
    sumberTambang.push(this.fb.group({
      tambangId: [null, [Validators.required]],
      jumlahPasokanTambang: [null, [Validators.required]]
    }))
    console.log(sumberTambang);
  }

  delTambang(i, fg) {
    this.calculateJumlah(0,i)
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

  getPltu = (q?) => {
    let filter = {
      limit: 10
    }
    console.log(this.fg.get('jenisKontrak').value);
    if(this.fg.get('jenisKontrak').value == 'cif' && this.referensiKontrak){
      if (!_.isEmpty(q))
        console.log(this.referensiKontrak.id);
        filter['where'] = { referensiKontrakId: this.referensiKontrak.id}
        filter['include'] = {relation:'pltu', scope: {where:{ name: { like: `.*${q}.*`, options: 'i' }}}}
      return this.kontrakPltuApi.find(filter).map((data: any) => {
        console.log(data);
        return data.map((entry) => {
          if(entry.pltu){
            return {
              name: entry.pltu.name,
              value: entry.pltu.id
            }
          }
        })
      });
    }else{
      if (!_.isEmpty(q))
        filter['where'] = { name: { like: `.*${q}.*`, options: 'i' }}
        // filter['include'] = [{pltuPrincipals:['pltu']}, {tambangPrincipals:['tambang']}, {jettyPrincipals:['jetty']}]
      return this.pltuApi.find(filter).map((data: any) => {
        return data.map(entry => {
          // console.log(entry);
          return {
            name: entry.name,
            value: entry.id
          }
        })
      });
    }    
  }

  getTambang = (q?) => {
    let filter = {
      limit: 10
    }

    if(this.fg.get('jenisKontrak').value == 'cif' && this.referensiKontrak){
      if (!_.isEmpty(q))
        console.log(this.referensiKontrak.id);
        filter['where'] = { referensiKontrakId: this.referensiKontrak.id}
        filter['include'] = {relation:'tambang', scope: {where:{ name: { like: `.*${q}.*`, options: 'i' }}}}
      return this.kontrakTambangApi.find(filter).map((data: any) => {
        console.log(data);
        return data.map((entry) => {
          if(entry.tambang){
            return {
              name: entry.tambang.name,
              value: entry.tambang.id
            }
          }
        })
      });
    }else{
      if (!_.isEmpty(q))
        filter['where'] = { name: { like: `.*${q}.*`, options: 'i' }}
      return this.tambangApi.find(filter).map((data: any) => {
        return data.map(entry => {
          // console.log(entry);
          return {
            name: entry.name,
            value: entry.id
          }
        })
      });
    }    
  }

  getJetty = (q?) => {
    let filter = {
      limit: 10
    }

    if(this.fg.get('jenisKontrak').value == 'cif' && this.referensiKontrak){
      if (!_.isEmpty(q))
        console.log(this.referensiKontrak.id);
        filter['where'] = { referensiKontrakId: this.referensiKontrak.id}
        filter['include'] = {relation:'jetty', scope: {where:{ name: { like: `.*${q}.*`, options: 'i' }}}}
      return this.kontrakJettyApi.find(filter).map((data: any) => {
        console.log(data);
        return data.map((entry) => {
          if(entry.jetty){
            return {
              name: entry.jetty.name,
              value: entry.jetty.id
            }
          }
        })
      });
    }else{
      if (!_.isEmpty(q))
        filter['where'] = { name: { like: `.*${q}.*`, options: 'i' }}
      return this.jettyApi.find(filter).map((data: any) => {
        return data.map(entry => {
          // console.log(entry);
          return {
            name: entry.name,
            value: entry.id
          }
        })
      });
    }    
  }

}
