import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import * as _ from 'lodash';
import { PltuApi } from '../../../shared/sdk';
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

  fg:FormGroup
  errorMsg
  submitting

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
    private router:Router
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

    this.fg = this.fb.group({
      nomorKontrak: [null, [Validators.required]],
      namaPekerjaan: [null, [Validators.required]],
      tanggalPekerjaan: [new Date(), [Validators.required]],
      mitra: [null, [Validators.required]],
      pltu: [null, [Validators.required]],
      tambang: [null, [Validators.required]]
    })
   }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    let model = this.fg.value

    model.mitraId = model.mitra.value

    delete model['mitra']

    this.onSave.emit(model)
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
