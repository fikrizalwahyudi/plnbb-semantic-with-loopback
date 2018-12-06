import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { Router } from '@angular/router';
import { MasterUserFormComponent } from './master-user-form.component';
import { RoleMappingApi } from '../../../shared/sdk';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'master-user-create',
  template: `
    <master-user-form (save)="save($event)"></master-user-form>
  `,
  styles: []
})
export class MasterUserCreateComponent implements OnInit {

  @ViewChild(MasterUserFormComponent)
  formComponent: MasterUserFormComponent

  constructor(
    private userApi:UserApi,
    private mappingApi:RoleMappingApi,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let roles = model['roles']

    delete model['password2']
    delete model['roles']

    this.userApi.create(model).subscribe((user) => {
      roles = roles.map(entry => {
        return {
          principalId: user.id,
          roleId: entry,
          principalType: 'USER'
        }
      })

      this.http.patch(`${environment.apiUrl}/middleware/roles/${user.id}`, roles).subscribe(() => {
        this.router.navigate(['/admin', 'user'])
        this.formComponent.submitting = false
      })
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }
}
