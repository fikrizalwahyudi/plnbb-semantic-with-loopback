import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterUserMitraFormComponent } from './master-user-mitra-form.component';
import { UserMitraApi } from '../../../shared/sdk/services/custom/UserMitra';

@Component({
  selector: 'master-user-mitra-create',
  template: `
    <master-user-mitra-form (save)="save($event)"></master-user-mitra-form>
  `,
  styles: []
})
export class MasterUserMitraCreateComponent implements OnInit {

  @ViewChild(MasterUserMitraFormComponent)
  formComponent: MasterUserMitraFormComponent

  constructor(
    private userMitraApi:UserMitraApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.userMitraApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'mitra', 'user'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
