import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/sdk/models/User';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash'; 
import { MasterUserFormComponent } from './master-user-form.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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
    private http:HttpClient,
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

      this.userApi.findById(id, {include: 'principals'}).subscribe(data => {
        this.user = data as User
        
        fg.patchValue(this.user)
        
        if(this.user['principals'].length > 0)
          fg.patchValue({roles: this.user['principals'].map(entry => entry.roleId)})
      })
    })
  }

  save(model) {
    //console.log(model)
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let roles = model['roles'].map(entry => {
      return {
        principalId: this.user.id,
        roleId: entry,
        principalType: 'USER'
      }
    })

    delete model['password2']
    delete model['roles']

    if(_.isEmpty(model.password))
      delete model['password']

    this.userApi.patchAttributes(this.user.id, model).subscribe(data => {
      this.http.patch(`${environment.apiUrl}/middleware/roles/${this.user.id}`, roles).subscribe(() => {
        this.router.navigate(['/admin', 'user'])
        this.formComponent.submitting = false
      })
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  } 
}
