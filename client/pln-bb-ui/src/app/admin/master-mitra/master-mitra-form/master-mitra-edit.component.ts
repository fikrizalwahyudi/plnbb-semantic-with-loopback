import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterMitraFormComponent } from './master-mitra-form.component';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Router, ActivatedRoute } from '@angular/router';
import { Mitra } from '../../../shared/sdk';

@Component({
  selector: 'master-mitra-edit',
  template: `
    <master-mitra-form (init)="init($event)" (save)="save($event)"></master-mitra-form>
  `,
  styles: []
})
export class MasterMitraEditComponent implements OnInit {

  @ViewChild(MasterMitraFormComponent)
  formComponent: MasterMitraFormComponent

  mitra:Mitra

  constructor(
    private mitraApi:MitraApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.mitraApi.findById(id).subscribe(data => {
        this.mitra = data as Mitra

        fg.patchValue(this.mitra)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.mitraApi.patchAttributes(this.mitra.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'mitra'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
