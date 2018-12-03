import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MasterTambangFormComponent } from './master-tambang-form.component';
import { TambangApi } from '../../../shared/sdk/services/custom/Tambang';

@Component({
  selector: 'master-tambang-create',
  template: `
    <master-tambang-form (save)="save($event)"></master-tambang-form>
  `,
  styles: []
})
export class MasterTambangCreateComponent implements OnInit {

  @ViewChild(MasterTambangFormComponent)
  formComponent: MasterTambangFormComponent

  constructor(
    private tambangApi:TambangApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.tambangApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'tambang'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
