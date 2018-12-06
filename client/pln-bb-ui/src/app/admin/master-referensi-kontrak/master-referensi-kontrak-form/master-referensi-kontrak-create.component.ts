import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { MasterReferensiKontrakFormComponent } from './master-referensi-kontrak-form.component';

@Component({
  selector: 'master-referensi-kontrak-create',
  template: `
    <master-referensi-kontrak-form (save)="save($event)"></master-referensi-kontrak-form>
  `,
  styles: []
})
export class MasterReferensiKontrakCreateComponent implements OnInit {

  @ViewChild(MasterReferensiKontrakFormComponent)
  formComponent: MasterReferensiKontrakFormComponent

  constructor(
    private referensiKontrakApi: ReferensiKontrakApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.referensiKontrakApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'referensi-kontrak'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
