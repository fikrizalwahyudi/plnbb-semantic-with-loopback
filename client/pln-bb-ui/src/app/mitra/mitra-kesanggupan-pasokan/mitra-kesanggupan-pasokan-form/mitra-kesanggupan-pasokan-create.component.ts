import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan-form.component';

@Component({
  selector: 'mitra-kesanggupan-pasokan-create',
  template: `
    <mitra-kesanggupan-pasokan-form (save)="save($event)"></mitra-kesanggupan-pasokan-form>
  `,
  styles: []
})
export class MitraKesanggupanPasokanCreateComponent implements OnInit {

  @ViewChild(MitraKesanggupanPasokanFormComponent)
  formComponent: MitraKesanggupanPasokanFormComponent

  constructor(
    private pltuApi: PltuApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.pltuApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'pltu'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
