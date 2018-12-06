import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { MasterPltuFormComponent } from './master-pltu-form.component';

@Component({
  selector: 'master-pltu-create',
  template: `
    <master-pltu-form (save)="save($event)"></master-pltu-form>
  `,
  styles: []
})
export class MasterPltuCreateComponent implements OnInit {

  @ViewChild(MasterPltuFormComponent)
  formComponent: MasterPltuFormComponent

  constructor(
    private pltuApi: PltuApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined
    
    this.pltuApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'pltu'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
