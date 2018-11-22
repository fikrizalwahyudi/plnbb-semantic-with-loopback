import { Component, OnInit } from '@angular/core';
// import { CacheService } from '../../shared/services/cache.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import uuidv1 = require('uuid/v1');
import {PltuService} from '../../shared/services/pltu.service';

@Component({
  selector: 'app-form-kesanggupan',
  templateUrl: './form-kesanggupan.component.html',
  styleUrls: ['./form-kesanggupan.component.sass']
})
export class FormKesanggupanComponent implements OnInit {

  static key = 'mitra_rencana_pasokan'

  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  pltu
  _records = {}
  _compiledRecords = []

  fg:FormGroup

  constructor(private fb:FormBuilder, private pltuService:PltuService) { 
    // this.pltu = this.cache.pltu

    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]],
      referensi: [null, [Validators.required]],
      pltu: [null, [Validators.required]],
      tgl: [new Date(), [Validators.required]],
      tipe: [1, [Validators.required]],
      mode: [1, [Validators.required]],
      jumlah: [0, [Validators.required]]
    })

    //console.log(this.cache.db.get(FormKesanggupanComponent.key))
    //this.cache.db.del(FormKesanggupanComponent.key)
    // if(!this.cache.db.get(this.Id))
    //   this.cache.db.set(this.Id, {})

    // this.compileRecords()
  }

  ngOnInit() {
    this.pltuService.getAllPltu().subscribe(pltu=>{
      this.pltu = pltu;
    })
  }

  get Id() { return 1 }//`${FormKesanggupanComponent.key}.${this.cache.currentUser.id}` }

  // compileRecords() {
    // this._records = this.cache.db.get(this.Id)

    // let tmp = []
    
    // for(let iKey in this._records) {
    //   let recOnBulan = this._records[iKey]
    //   let showBulan = true
    //   for(let jKey in recOnBulan) {
    //     let recOnPltu = recOnBulan[jKey]
    //     let showPltu = true
    //     for(let kKey in recOnPltu) {
    //       let foundPltu = this.pltu.find((p:any) => {
    //         return p.id ==jKey
    //       })

    //       tmp.push({
    //         id: recOnPltu[kKey].id,
    //         bulan: (showBulan ? iKey : ''),
    //         pltu: (showPltu ? foundPltu.name : ''),
    //         tgl: recOnPltu[kKey].tgl,
    //         tipe: (recOnPltu[kKey].tipe == 1 ? 'LRC' : 'MRC'),
    //         mode: (recOnPltu[kKey].mode == 1 ? 'Tongkang' : (recOnPltu[kKey].mode == 2 ? 'Vessels' : 'Trucking')),
    //         jumlah: recOnPltu[kKey].jumlah
    //       })
          
    //       showBulan = false
    //       showPltu = false
    //     }
    //   }
    // }

    // this._compiledRecords = tmp
  // }

  submit() {
    console.log(this.fg.value.tgl.getTime());
    //console.log(this.fg.value)
    // let records = this._records //this.cache.db.get(FormKesanggupanComponent.key)
    // let model = this.fg.value

    // records[model.bulan] = records[model.bulan] || {}
    // let recOnBulan = records[model.bulan]

    // recOnBulan[model.pltu] = recOnBulan[model.pltu] || {}
    // let recOnPltu = recOnBulan[model.pltu]

    // recOnPltu[model.tgl.getDate()] = {
    //   id: uuidv1(),
    //   tgl: model.tgl,
    //   tipe: model.tipe,
    //   mode: model.mode,
    //   jumlah: model.jumlah
    // }

    // //console.log(records)
    // //this.fg.reset(this.fgInit)
    // // this.cache.db.set(this.Id, records)

    // this.compileRecords()

    // this.fg.reset({
    //   tahun: 2018,
    //   bulan: (new Date()).getMonth(),
    //   referensi: null,
    //   pltu: null,
    //   tgl: new Date(),
    //   tipe: 1,
    //   mode: 1,
    //   jumlah: 0
    // })

    return false
  }

  get records() { return this._compiledRecords }

}
