import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterMitraFormComponent } from './master-mitra-form.component';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';

@Component({
  selector: 'master-mitra-create',
  template: `
    <master-mitra-form (save)="save($event)"></master-mitra-form>
  `,
  styles: []
})
export class MasterMitraCreateComponent implements OnInit {

  @ViewChild(MasterMitraFormComponent)
  formComponent: MasterMitraFormComponent

  constructor(
    private mitraApi:MitraApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.mitraApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'mitra'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
