import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { CacheService } from '../../shared/services/cache.service';
// import { FormKebutuhanComponent } from '../../pln/form-kebutuhan/form-kebutuhan.component';

@Component({
  selector: 'app-coal-source',
  templateUrl: './coal-source.component.html',
  styleUrls: ['./coal-source.component.sass']
})
export class CoalSourceComponent implements OnInit {

  siForm:FormGroup
  isMitraInput = false
  hasMitraInput = false
  mitra
  _records
  selected
  pltu
  tambang

  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute) { 
    this.route.url.subscribe(segments => {
      if(segments[0].path === 'coal-source')
        this.isMitraInput = true
    })

    // this.mitra = this.cache.mitra
    // this.pltu = this.cache.pltu
    // this.tambang = this.cache.tambang
    
    // this._records = this.cache.db.get(FormKebutuhanComponent.key)

    this.siForm = this.fb.group({
      entries: this.fb.array([
        this.fb.group({
          tambang: [null, [Validators.required]],
          amount: [null, [Validators.required]]
        })
      ])
    })
  }

  ngOnInit() {
  }

  add() {
    let entries = this.siForm.get('entries') as FormArray

    entries.push(this.fb.group({
      tambang: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    }))
  }

  del(i) {
    let entries = this.siForm.get('entries') as FormArray

    entries.removeAt(i)
  }

  get entries() { return this.siForm.get('entries') }

} 
