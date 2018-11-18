import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CacheService } from '../../shared/services/cache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormKebutuhanComponent } from '../form-kebutuhan/form-kebutuhan.component';
import * as _ from 'lodash'

@Component({
  selector: 'app-realisasi-shipping',
  templateUrl: './realisasi-shipping.component.html',
  styleUrls: ['./realisasi-shipping.component.sass']
})
export class RealisasiShippingComponent implements OnInit {

  selected:any = {}
  
  isMitraInput = false
  hasMitraInput = false
  toggleView = false

  pltu
  fg:FormGroup

  _compiledRecords = []
  _records

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private router:Router) { 
    this.route.url.subscribe(segments => {
      if(segments[0].path === 'realisasi-sailing')
        this.isMitraInput = true
    })

    // this.pltu = this.cache.pltu

    this.fg = this.fb.group({
      tglMulai: [null, [Validators.required]],
      tglSelesai: [null, [Validators.required]],
      ta: [null, [Validators.required]],
      berthing: [null, [Validators.required]],
      sailing: [null, [Validators.required]],
      eta: [null, [Validators.required]]
    })

    this.route.params.subscribe(param => {
      // this._records = this.cache.db.get(this.Id)

      for(let iKey in this._records) {
        let recOnBulan = this._records[iKey]
        for(let jKey in recOnBulan) {
          let recOnPltu = recOnBulan[jKey]
          for(let kKey in recOnPltu) {
            let item = recOnPltu[kKey]
            
            if(item.id === param['id']) {
              this.selected = item

              if(item._plnSailingDetails && !this.isMitraInput)
                this.fg.setValue(item._plnSailingDetails)
              else if(item._mitraSailingDetails && this.isMitraInput)
                this.fg.setValue(item._mitraSailingDetails)

              if(!this.isMitraInput && item._mitraSailingDetails)
                this.hasMitraInput = true
            }

            //console.log(item)
          }
        }
      }
    })
  }

  ngOnInit() {
  }

  submit() {
    if(_.isEmpty(this.selected)) return false

    let model = this.fg.value

    if(!this.isMitraInput)
      this.selected._plnSailingDetails = model
    else
      this.selected._mitraSailingDetails = model
    
    this.selected = {}

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    if(!this.isMitraInput)
      this.router.navigate(['pln-realisasi-pengiriman'])
    else
      this.router.navigate(['realisasi-pengiriman'])
  }

  back() {
    if(!this.isMitraInput)
      this.router.navigate(['pln-realisasi-pengiriman'])
    else
      this.router.navigate(['realisasi-pengiriman'])
  }

  toggle() {
    if(!this.toggleView) {
      this.fg.reset(this.selected._mitraLoadingDetails)
      this.toggleView = true
    }
    else {
      if(this.selected._plnLoadingDetails)
        this.fg.reset(this.selected._plnLoadingDetails)
      else
        this.fg.reset({
          tglDikirim: new Date(),
          jumlahDikirim: 0,
          tbBg: null,
          noSi: null,
          laycan: null,
          jetty: null
        })
      
      this.toggleView = false
    }
    
  }

  get Id() { return `${FormKebutuhanComponent.key}` }

}
