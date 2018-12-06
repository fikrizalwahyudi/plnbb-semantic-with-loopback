import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterReferensiKontrakFormComponent } from './master-referensi-kontrak-form.component';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { Router, ActivatedRoute } from '@angular/router';
import { ReferensiKontrak } from '../../../shared/sdk';

@Component({
  selector: 'master-referensi-kontrak-edit',
  template: `
    <master-referensi-kontrak-form (init)="init($event)" (save)="save($event)"></master-referensi-kontrak-form>
  `,
  styles: []
})
export class MasterReferensiKontrakEditComponent implements OnInit {

  @ViewChild(MasterReferensiKontrakFormComponent)
  formComponent: MasterReferensiKontrakFormComponent

  referensiKontrak:ReferensiKontrak

  constructor(
    private referensiKontrakApi: ReferensiKontrakApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.referensiKontrakApi.findById(id).subscribe(data => {
        this.referensiKontrak = data as ReferensiKontrak

        fg.patchValue(this.referensiKontrak)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.referensiKontrakApi.patchAttributes(this.referensiKontrak.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'referensi-kontrak'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
