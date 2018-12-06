import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterPltuFormComponent } from './master-pltu-form.component';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { Router, ActivatedRoute } from '@angular/router';
import { Pltu } from '../../../shared/sdk';

@Component({
  selector: 'master-pltu-edit',
  template: `
    <master-pltu-form (init)="init($event)" (save)="save($event)"></master-pltu-form>
  `,
  styles: []
})
export class MasterPltuEditComponent implements OnInit {

  @ViewChild(MasterPltuFormComponent)
  formComponent: MasterPltuFormComponent

  pltu:Pltu

  constructor(
    private pltuApi: PltuApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.pltuApi.findById(id).subscribe(data => {
        this.pltu = data as Pltu

        fg.patchValue(this.pltu)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.pltuApi.patchAttributes(this.pltu.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'pltu'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
