import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterTambangFormComponent } from './master-tambang-form.component';
import { TambangApi } from '../../../shared/sdk/services/custom/Tambang';
import { Router, ActivatedRoute } from '@angular/router';
import { Tambang } from '../../../shared/sdk';

@Component({
  selector: 'master-tambang-edit',
  template: `
    <master-tambang-form (init)="init($event)" (save)="save($event)"></master-tambang-form>
  `,
  styles: []
})
export class MasterTambangEditComponent implements OnInit {

  @ViewChild(MasterTambangFormComponent)
  formComponent: MasterTambangFormComponent

  tambang:Tambang

  constructor(
    private tambangApi:TambangApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.tambangApi.findById(id).subscribe(data => {
        this.tambang = data as Tambang

        fg.patchValue(this.tambang)
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.tambangApi.patchAttributes(this.tambang.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'tambang'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
