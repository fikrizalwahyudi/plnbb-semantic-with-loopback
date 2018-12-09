import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterJettyFormComponent } from './master-jetty-form.component';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { Router, ActivatedRoute } from '@angular/router';
import { Jetty } from '../../../shared/sdk';
@Component({
  selector: 'app-master-jetty-edit',
  template: `
    <master-jetty-form (init)="init($event)" (save)="save($event)"></master-jetty-form>
  `,
  styles: []
})
export class MasterJettyEditComponent implements OnInit {

  @ViewChild(MasterJettyFormComponent)
  formComponent: MasterJettyFormComponent

  jetty: Jetty

  constructor(
    private jettyApi: JettyApi,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }

  init(fg: FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.jettyApi.findById(id).subscribe(data => {
        this.jetty = data as Jetty

        fg.patchValue(this.jetty)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.jettyApi.patchAttributes(this.jetty.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'jetty'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
