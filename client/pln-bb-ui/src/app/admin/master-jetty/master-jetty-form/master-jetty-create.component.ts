import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { MasterJettyFormComponent } from './master-jetty-form.component';

@Component({
  selector: 'app-master-jetty-create',
  template: `
    <master-jetty-form (save)="save($event)"></master-jetty-form>
  `,
  styles: []
})
export class MasterJettyCreateComponent implements OnInit {

  @ViewChild(MasterJettyFormComponent)
  formComponent: MasterJettyFormComponent

  constructor(
    private jettyApi: JettyApi,
    private router: Router
  ) { }

  ngOnInit() {
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.jettyApi.create(model).subscribe(() => {
      this.router.navigate(['/admin', 'jetty'])
      this.formComponent.submitting = false
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
