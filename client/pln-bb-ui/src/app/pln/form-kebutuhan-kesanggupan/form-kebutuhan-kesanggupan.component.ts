import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CacheService } from '../../shared/services/cache.service';
import { FormKebutuhanComponent } from '../form-kebutuhan/form-kebutuhan.component';
import { Router, Route, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-kebutuhan-kesanggupan',
  templateUrl: './form-kebutuhan-kesanggupan.component.html',
  styleUrls: ['./form-kebutuhan-kesanggupan.component.sass']
})
export class FormKebutuhanKesanggupanComponent implements OnInit {

  selected:any = {}
  hasMitraInput = false
  toggleView = false

  pltu
  fg:FormGroup

  _compiledRecords = []
  _records

  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute) { 
    // this.pltu = this.cache.pltu

    this.fg = this.fb.group({
      tglDikirim: [new Date(), [Validators.required]],
      jumlahDikirim: [0, [Validators.required]],
      tbBg: [null, [Validators.required]],
      noSi: [null, [Validators.required]],
      laycan: [null, [Validators.required]],
      jetty: [null, [Validators.required]]  
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

              if(item._plnShippingDetails)
                this.fg.setValue(item._plnShippingDetails)

              if(item._mitraShippingDetails)
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

    this.selected._plnShippingDetails = model
    this.selected = {}

    console.log(this._records)

    // this.cache.db.set(FormKebutuhanComponent.key, this._records)

    this.fg.reset({
      tglDikirim: new Date(),
      jumlahDikirim: 0,
      tbBg: null,
      noSi: null,
      laycan: null,
      jetty: null
    })

    this.router.navigate(['pln-realisasi-pengiriman'])
  }

  back() {
    this.router.navigate(['pln-realisasi-pengiriman'])
  }

  toggle() {
    if(!this.toggleView) {
      this.fg.reset(this.selected._mitraShippingDetails)
      this.toggleView = true
    }
    else {
      if(this.selected._plnShippingDetails)
        this.fg.reset(this.selected._plnShippingDetails)
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
