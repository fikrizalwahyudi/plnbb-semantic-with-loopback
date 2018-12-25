import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';
import { PltuApi, JettyApi } from '../../../shared/sdk';
import { TambangApi } from '../../../shared/sdk/services/custom/Tambang';

@Component({
  selector: 'master-referensi-kontrak-form',
  templateUrl: './master-referensi-kontrak-form.component.html',
  styleUrls: ['./master-referensi-kontrak-form.component.sass']
})
export class MasterReferensiKontrakFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  pltu
  tambang
  jetty

  fg:FormGroup
  errorMsg
  submitting

  isValidation = false

  mitraUri = `${environment.apiUrl}/api/mitra`
  searchFilterMitra = {
    where:{
      or:[
        {name: {like: '{query}.*'}},
        {address: {like: '{query}.*'}}
      ]
    },
    limit: 10
  }

  constructor(
    private pltuApi:PltuApi,
    private tambangApi:TambangApi,
    private fb:FormBuilder,
    private router:Router,
    private jettyApi:JettyApi
  ) {
    this.pltu = this.pltuApi.find().map((data:any) => {
      return data.map(entry => {
        return {
          name: entry.name,
          value: entry.id
        }
      })
    })

    this.tambang = this.tambangApi.find().map((data:any) => {
      return data.map(entry => {
        return {
          name: entry.name,
          value: entry.id
        }
      })
    })

    this.jetty = this.jettyApi.find().map((data:any) => {
      return data.map(entry => {
        return {
          name: entry.name,
          value: entry.id
        }
      })
    })

    this.fg = this.fb.group({
      nomorKontrak: [null, [Validators.required]],
      namaPekerjaan: [null, [Validators.required]],
      tanggalPekerjaan: [new Date(), [Validators.required]],
      mitra: [null, [Validators.required]],
      pltu: null,
      jetty: null,
      tambang: null,
      tipe: [null, [Validators.required]]
    })
   }

  ngOnInit() {
    this.onInit.emit(this.fg)
    this.onChanges();
  }

  save() {
    let model = this.fg.value

    model.mitraId = model.mitra.value

    delete model['mitra']

    this.onSave.emit(model)
  }

  onChanges(): void {
    this.fg.get('tipe').valueChanges.subscribe(val => {
      console.log(val);
      if(val=='cif'){
        this.isValidation = true;
        this.fg.controls['pltu'].setValidators([Validators.required]);
        this.fg.controls['jetty'].setValidators([Validators.required]);
        this.fg.controls['tambang'].setValidators([Validators.required]);
        this.fg.controls['pltu'].updateValueAndValidity();
        this.fg.controls['jetty'].updateValueAndValidity();
        this.fg.controls['tambang'].updateValueAndValidity();
      }else{
        this.isValidation = false;
        this.fg.controls['pltu'].clearValidators();
        this.fg.controls['jetty'].clearValidators();
        this.fg.controls['tambang'].clearValidators();
        this.fg.controls['pltu'].updateValueAndValidity();
        this.fg.controls['jetty'].updateValueAndValidity();
        this.fg.controls['tambang'].updateValueAndValidity();
      }

      console.log(this.fg);
    });
  }


  cancel() {
    this.router.navigate(['/admin', 'referensi-kontrak'])
  }

  onSearchMitra({response, cb}) {
    cb({
      success: true,
      results: _.values(response).map(item => {
        return {
          name: item.name,
          value: item.id,
          text: item.name
        }
      })
    })
  }

}
