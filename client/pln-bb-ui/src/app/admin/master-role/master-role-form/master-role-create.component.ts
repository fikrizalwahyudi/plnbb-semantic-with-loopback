import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterRoleFormComponent } from './master-role-form.component';
import { RoleApi } from '../../../shared/sdk/services/custom/Role';

@Component({
  selector: 'master-role-create',
  template: `
    <master-role-form (save)="save($event)"></master-role-form>
  `,
  styles: []
})
export class MasterRoleCreateComponent implements OnInit {

  @ViewChild(MasterRoleFormComponent)
  formComponent: MasterRoleFormComponent

  constructor(
    private roleApi:RoleApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.roleApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'role'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
