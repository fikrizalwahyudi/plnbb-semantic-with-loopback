import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterMitraUserFormComponent } from './master-mitra-user-form.component';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Router, ActivatedRoute } from '@angular/router';
import { Mitra } from '../../../shared/sdk';
import { User } from '../../../shared/sdk';
import { UserApi } from '../../../shared/sdk';

@Component({
  selector: 'master-mitra-user-create',
  template: `
    <master-mitra-user-form (init)="init($event)" (save)="save($event)"></master-mitra-user-form>
  `,
  styles: []
})
export class MasterMitraUserCreateComponent implements OnInit {

  @ViewChild(MasterMitraUserFormComponent)
  formComponent: MasterMitraUserFormComponent

  mitra:Mitra
  user:User[]

  constructor(
    private userApi:UserApi,
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
