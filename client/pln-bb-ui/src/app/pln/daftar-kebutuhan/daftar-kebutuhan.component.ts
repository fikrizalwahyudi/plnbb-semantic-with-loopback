import { Component, OnInit } from '@angular/core';
// import { CacheService } from '../../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormKebutuhanComponent } from '../form-kebutuhan/form-kebutuhan.component';

@Component({
  selector: 'app-daftar-kebutuhan',
  templateUrl: './daftar-kebutuhan.component.html',
  styleUrls: ['./daftar-kebutuhan.component.sass']
})
export class DaftarKebutuhanComponent implements OnInit {

  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

  pltu = []
  _records = {}
  _compiledRecords = []

  constructor( private router:Router) { 
    // this.pltu = this.cache.pltu
    
    // if(!this.cache.db.get(this.Id))
    //   this.cache.db.set(this.Id, {})

    this.compileRecords()
  }

  ngOnInit() {
    
  }

  get records() { return this._compiledRecords }

  get Id() { return `${FormKebutuhanComponent.key}` }

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
            mitra: recOnPltu[kKey].mitra,
            _plnShippingDetails: recOnPltu[kKey]._plnShippingDetails,
            _plnLoadingDetails: recOnPltu[kKey]._plnLoadingDetails,
            _plnUnloadingDetails: recOnPltu[kKey]._plnUnloadingDetails,
            _mitraSi: recOnPltu[kKey]._mitraSi
          })
          
          showBulan = false
          showPltu = false
        }
      }
    }

    this._compiledRecords = tmp

    //console.log(tmp)
  }

  processSi(id) {
    this.router.navigate(['pln-approve-si', id])
  }

  info(id) {
    this.router.navigate(['pln-realisasi-info', id])
  }

  loading(id) {
    this.router.navigate(['pln-realisasi-loading', id])
  }

  unloading(id) {
    this.router.navigate(['pln-realisasi-unloading', id])
  }
  
}
