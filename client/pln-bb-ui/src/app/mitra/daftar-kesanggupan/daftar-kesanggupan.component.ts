import { Component, OnInit } from '@angular/core';
// import { CacheService } from '../../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormKesanggupanComponent } from '../form-kesanggupan/form-kesanggupan.component';
// import { FormKebutuhanComponent } from '../../pln/form-kebutuhan/form-kebutuhan.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from 'lodash'

@Component({
  selector: 'app-daftar-kesanggupan',
  templateUrl: './daftar-kesanggupan.component.html',
  styleUrls: ['./daftar-kesanggupan.component.sass']
})
export class DaftarKesanggupanComponent implements OnInit {

  selected:any = {}
  data = []

  pltu
  fg:FormGroup

  _compiledRecords = []
  _records
  
  constructor(private fb:FormBuilder, private router:Router) { 
    // this.pltu = this.cache.pltu

    this.fg = this.fb.group({
      tglDikirim: [new Date(), [Validators.required]],
      jumlahDikirim: [0, [Validators.required]],
      tbBg: [null, [Validators.required]],
      noSi: [null, [Validators.required]],
      laycan: [null, [Validators.required]],
      jetty: [null, [Validators.required]]  
    })
  }

  ngOnInit() {
    this.compileRecords()
  }

  select(item) {
    //console.log(item)
    let tgl = new Date(item.tgl)
    this.selected = {
      id: item.id,
      name: `${item._pltu} - ${item._bulan} ${item._tgl}`,
      _item: item._item
    }
  }

  compileRecords() {
    // this._records = this.cache.db.get(FormKebutuhanComponent.key)
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

          /*if(kKey === '_mitraShippingDetails') {
            delete recOnPltu[kKey]
            this.cache.db.set(FormKebutuhanComponent.key, this._records)
            return false
          }*/

          tmp.push({
            id: recOnPltu[kKey].id,
            bulan: (showBulan ? iKey : ''),
            pltu: (showPltu ? foundPltu.name : ''),
            tgl: recOnPltu[kKey].tgl,
            tipe: (recOnPltu[kKey].tipe == 1 ? 'LRC' : 'MRC'),
            mode: (recOnPltu[kKey].mode == 1 ? 'Tongkang' : (recOnPltu[kKey].mode == 2 ? 'Vessels' : 'Trucking')),
            jumlah: recOnPltu[kKey].jumlah,
            _pltu: foundPltu.name,
            _bulan: iKey,
            _tgl: kKey,
            _item: recOnPltu[kKey],
            _mitraShippingDetails: recOnPltu[kKey]._mitraShippingDetails,
            _mitraLoadingDetails: recOnPltu[kKey]._mitraLoadingDetails,
            _mitraSailingDetails: recOnPltu[kKey]._mitraSailingDetails,
            _mitraUnloadingDetails: recOnPltu[kKey]._mitraUnloadingDetails,
            _mitraSi: recOnPltu[kKey]._mitraSi
          })
          
          showBulan = false
          showPltu = false
        }
      }
    }

    this._compiledRecords = tmp
  }

  submit() {
    if(_.isEmpty(this.selected)) return false

    let model = this.fg.value

    this.selected._item._mitraShippingDetails = model
    this.selected = {}

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    this.fg.reset({
      tglDikirim: new Date(),
      jumlahDikirim: 0,
      tbBg: null,
      noSi: null,
      laycan: null,
      jetty: null
    })
  }

  get records() { return this._compiledRecords }

  get isMitra() { return true } //this.cache.db.get('user').role.find(r => r === 'mitra') }

  get isMitraShipping() { return false } //this.cache.db.get('user').role.find(r => r === 'transport') }

  info(id) {
    this.router.navigate(['realisasi-info', id])
  }

  loading(id) {
    this.router.navigate(['realisasi-loading', id])
  }

  sailing(id) {
    this.router.navigate(['realisasi-sailing', id])
  }

  unloading(id) {
    this.router.navigate(['realisasi-unloading', id])
  }

  requestSi(id) {
    this.router.navigate(['request-si', id])
  }

  source(id) {
    this.router.navigate(['coal-source', id])
  }
}
