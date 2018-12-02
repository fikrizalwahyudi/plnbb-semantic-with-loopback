import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { Router } from '@angular/router';
import { MasterUserFormComponent } from './master-user-form.component';

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
    private router:Router
  ) { }

  ngOnInit() {
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    delete model['password2']

    this.userApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'user'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }
}
