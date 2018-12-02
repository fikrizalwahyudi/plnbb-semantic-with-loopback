import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterRoleFormComponent } from './master-role-form.component';
import { RoleApi } from '../../../shared/sdk/services/custom/Role';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../shared/sdk';

@Component({
  selector: 'master-role-edit',
  template: `
    <master-role-form (init)="init($event)" (save)="save($event)"></master-role-form>
  `,
  styles: []
})
export class MasterRoleEditComponent implements OnInit {

  @ViewChild(MasterRoleFormComponent)
  formComponent: MasterRoleFormComponent

  role:Role

  constructor(
    private roleApi:RoleApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.roleApi.findById(id).subscribe(data => {
        this.role = data as Role

        fg.patchValue(this.role)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.roleApi.patchAttributes(this.role.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'role'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
