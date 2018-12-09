import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan-form.component';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { Router, ActivatedRoute } from '@angular/router';
import { Pltu } from '../../../shared/sdk';

@Component({
  selector: 'mitra-kesanggupan-pasokan-edit',
  template: `
    <mitra-kesanggupan-pasokan-form (init)="init($event)" (save)="save($event)"></mitra-kesanggupan-pasokan-form>
  `,
  styles: []
})
export class MitraKesanggupanPasokanEditComponent implements OnInit {

  @ViewChild(MitraKesanggupanPasokanFormComponent)
  formComponent: MitraKesanggupanPasokanFormComponent

  pltu:Pltu

  constructor(
    private pltuApi: PltuApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.pltuApi.findById(id).subscribe(data => {
        this.pltu = data as Pltu

        fg.patchValue(this.pltu)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.pltuApi.patchAttributes(this.pltu.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'pltu'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}