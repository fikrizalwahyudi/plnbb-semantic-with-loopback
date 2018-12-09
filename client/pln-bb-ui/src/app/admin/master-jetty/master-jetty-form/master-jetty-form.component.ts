import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'master-jetty-form',
  templateUrl: './master-jetty-form.component.html',
  styleUrls: ['./master-jetty-form.component.sass']
})
export class MasterJettyFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter();
  @Output('save') onSave = new EventEmitter();

  fg: FormGroup
  errorMsg
  submitting


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.fg = this.fb.group({
      code: [null, [Validators.required]],
      address: [null, [Validators.required]],
      name: [null, [Validators.required]],
      province: [null, [Validators.required]],
      city: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
      latitude: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/admin', 'pltu'])
  }
}
