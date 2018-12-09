import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { MitraKesanggupanFormComponent } from './mitra-kesanggupan-form.component';

@Component({
  selector: 'mitra-kesanggupan-create',
  template: `
    <mitra-kesanggupan-form (save)="save($event)"></mitra-kesanggupan-form>
  `,
  styles: []
})
export class MitraKesanggupanCreateComponent implements OnInit {

  @ViewChild(MitraKesanggupanFormComponent)
  formComponent: MitraKesanggupanFormComponent

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
