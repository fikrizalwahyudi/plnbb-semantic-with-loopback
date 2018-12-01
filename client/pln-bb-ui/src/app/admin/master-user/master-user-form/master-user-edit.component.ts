import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/sdk/models/User';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash'; 
import { MasterUserFormComponent } from './master-user-form.component';

@Component({
  selector: 'master-user-edit',
  template: `
    <master-user-form (init)="init($event)" (save)="save($event)"></master-user-form>
  `,
  styles: []
})
export class MasterUserEditComponent implements OnInit {

  @ViewChild(MasterUserFormComponent)
  formComponent: MasterUserFormComponent

  user:User

  constructor(
    private userApi:UserApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {

  }

  init(fg:FormGroup) {
    let passwordControl = fg.get('password')
    let password2Control = fg.get('password2')

    passwordControl.clearValidators()
    password2Control.clearValidators()

    this.route.params.subscribe(params => {
      let id = params['id']

      this.userApi.findById(id).subscribe(data => {
        this.user = data as User
        
        fg.patchValue(this.user)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    delete model['password2']

    if(_.isEmpty(model.password))
      delete model['password']

    this.userApi.patchAttributes(this.user.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'user'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  } 
}
