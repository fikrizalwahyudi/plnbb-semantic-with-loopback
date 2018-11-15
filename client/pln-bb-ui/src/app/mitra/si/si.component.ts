import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { CacheService } from '../../shared/services/cache.service';
// import { FormKebutuhanComponent } from '../../pln/form-kebutuhan/form-kebutuhan.component';

@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.sass']
})
export class SiComponent implements OnInit {

  siForm:FormGroup
  isMitraInput = false
  hasMitraInput = false
  mitra
  _records
  selected
  pltu

  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute) { 
    this.route.url.subscribe(segments => {
      if(segments[0].path === 'request-si')
        this.isMitraInput = true
    })

    // this.mitra = this.cache.mitra
    // this.pltu = this.cache.pltu
    
    // this._records = this.cache.db.get(FormKebutuhanComponent.key)

    this.siForm = this.fb.group({
      mitraBatuId: [null, [Validators.required]],
      mitraTransportId: [null, [Validators.required]],
      noSi: [null, [Validators.required]],
      date: [new Date(), [Validators.required]],
      laycan: [null, [Validators.required]],
      jetty: [null, [Validators.required]],
      namaKapal: [null, [Validators.required]],
      pltu: [null, [Validators.required]]
    })

    this.route.params.subscribe(params => {
      let id = params['id']
      // let counter = this.cache.noSi++
      let counter = 1;

      let {selected, pltu} = this.findById(id)
      this.selected = selected

      if(selected._mitraSi)
        this.siForm.patchValue(selected._mitraSi)
      else
        this.siForm.patchValue({mitraBatuId: this.selected.mitra.id, noSi: counter, pltu: pltu.name})
    })
  }

  ngOnInit() {
  }

  findById(id) {
    for(let iKey in this._records) {
      let recOnBulan = this._records[iKey]
      for(let jKey in recOnBulan) {
        let recOnPltu = recOnBulan[jKey]
        for(let kKey in recOnPltu) {
          let foundPltu = this.pltu.find((p:any) => {
            return p.id ==jKey
          })

          if(recOnPltu[kKey].id === id)
            return {selected: recOnPltu[kKey], pltu: foundPltu}
        }
      }
    }

    return undefined
  }

  submit() {
    this.selected._mitraSi = this.siForm.value

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    if(this.isMitraInput)
      this.router.navigate(['realisasi-pengiriman'])
    else
      this.router.navigate(['pln-realisasi-pengiriman'])
  }

  download() {
    window.open('assets/si.pdf');
  }

  approve() {
    this.selected._plnSi = this.selected._mitraSi

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    this.router.navigate(['pln-realisasi-pengiriman'])
  }

  reject() {
    delete this.selected['_mitraSi']

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    this.router.navigate(['pln-realisasi-pengiriman'])
  }

} 
