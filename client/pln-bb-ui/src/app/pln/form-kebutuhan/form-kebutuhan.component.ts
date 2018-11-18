import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { CacheService } from '../../shared/services/cache.service';
import { FormKesanggupanComponent } from '../../mitra/form-kesanggupan/form-kesanggupan.component';
import uuidv1 = require('uuid/v1')

@Component({
  selector: 'app-form-kebutuhan',
  templateUrl: './form-kebutuhan.component.html',
  styleUrls: ['./form-kebutuhan.component.sass']
})
export class FormKebutuhanComponent implements OnInit {

  static key = 'mitra_rencana_pasokan'

  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  pltu = []
  mitra = []
  _records = {}
  _compiledRecords = []

  fg:FormGroup

  constructor( private fb:FormBuilder) { 
    // this.pltu = this.cache.pltu
    
    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]],
      pltu: [null, [Validators.required]],
      mitra: [null, [Validators.required]],
      tgl: [new Date(), [Validators.required]]
    })

    //this.cache.db.del(this.Id)
    // if(!this.cache.db.get(this.Id))
    //   this.cache.db.set(this.Id, {})

    this.compileRecords()

    console.log(this._records)
  }

  ngOnInit() {

  }

  get Id() { return `${FormKebutuhanComponent.key}` }

  onSelectPLTU(value) {
    this.mitra = []
    // this.cache.users.forEach((u:any) => {
    //   let recs = this.cache.db.get(`${FormKesanggupanComponent.key}.${u.id}`)
    //   if(recs) {
    //     for(let iKey in recs) {
    //       let recOnBulan = recs[iKey]
    //       for(let jKey in recOnBulan) {
    //         let recOnPltu = recOnBulan[jKey]
    //         for(let kKey in recOnPltu) {
    //           if(jKey == value && iKey == this.fg.get('bulan').value) {
    //             this.mitra.push({
    //               id: recOnPltu[kKey].id,
    //               name: `${u.entity.alias} - ${kKey} ${(recOnPltu[kKey].tipe == 1? 'LRC' : 'MRC')}`,
    //               ref: {bulan: iKey, pltu: jKey, tgl: kKey, model: recOnPltu[kKey]}
    //             })
    //           }
    //         }
    //       }
    //     }
    //   }
    // })
  }

  compileRecords() {
    // this._records = this.cache.db.get(this.Id)

    let tmp = []
    
    for(let iKey in this._records) {
      let recOnBulan = this._records[iKey]
      let showBulan = true
      for(let jKey in recOnBulan) {
        let recOnPltu = recOnBulan[jKey]
        let showPltu = true
        for(let kKey in recOnPltu) {
          let foundPltu = this.pltu.find((p:any) => {
            return p.id ==jKey
          })

          tmp.push({
            id: recOnPltu[kKey].id,
            bulan: (showBulan ? iKey : ''),
            pltu: (showPltu ? foundPltu.name : ''),
            tgl: recOnPltu[kKey].tgl,
            tipe: (recOnPltu[kKey].tipe == 1 ? 'LRC' : 'MRC'),
            mode: (recOnPltu[kKey].mode == 1 ? 'Tongkang' : (recOnPltu[kKey].mode == 2 ? 'Vessels' : 'Trucking')),
            jumlah: recOnPltu[kKey].jumlah,
            mitra: recOnPltu[kKey].mitra
          })
          
          showBulan = false
          showPltu = false
        }
      }
    }

    this._compiledRecords = tmp

    //console.log(tmp)
  }

  submit() {
    //console.log(this.fg.value)
    let records = this._records //this.cache.db.get(FormKesanggupanComponent.key)
    let model = this.fg.value

    records[model.bulan] = records[model.bulan] || {}
    let recOnBulan = records[model.bulan]

    recOnBulan[model.pltu] = recOnBulan[model.pltu] || {}
    let recOnPltu = recOnBulan[model.pltu]

    // this.cache.users.forEach(u => {
    //   let recs = this.cache.db.get(`${FormKesanggupanComponent.key}.${u.id}`)
    //   if(recs && recs[model.bulan] && recs[model.bulan][model.pltu]) {
    //     for(let key in recs[model.bulan][model.pltu]) {
    //       //console.log(recs[model.bulan][model.pltu][key])
    //       let rec = recs[model.bulan][model.pltu][key]
    //       if(rec.id === model.mitra) {
    //         recOnPltu[model.tgl.getDate()] = {
    //           id: uuidv1(),
    //           tgl: model.tgl,
    //           tipe: rec.tipe,
    //           mode: rec.mode,
    //           jumlah: rec.jumlah,
    //           mitra: u
    //         }
    //       }
    //     }
    //   }
    // })

    /*recOnPltu[model.tgl.getDate()] = {
      id: uuidv1(),
      tgl: model.tgl,
      tipe: model.tipe,
      mode: model.mode,
      jumlah: model.jumlah
    }*/

    //console.log(records)
    //this.fg.reset(this.fgInit)
    // this.cache.db.set(this.Id, records)

    this.compileRecords()

    this.fg.reset({
      tahun: 2018,
      bulan: (new Date()).getMonth(),
      pltu: null,
      mitra: null,
      tgl: new Date()
    })

    return false
  }

  delete(id) {
    // console.log(id)
    let records = this._records

    for(let iKey in records) {
      let recOnBulan = records[iKey]
      for(let jKey in recOnBulan) {
        let recOnPltu = recOnBulan[jKey]
        for(let kKey in recOnPltu) {
          let recOnTgl = recOnPltu[kKey]
          console.log(recOnTgl.id + ' = ' + id)
          if(recOnTgl.id === id) {
            delete recOnPltu[kKey]

            // this.cache.db.set(this.Id, records)

            this.compileRecords()
            return true
          }
        }
      }
    }
  }

  get records() { return this._compiledRecords }

}
