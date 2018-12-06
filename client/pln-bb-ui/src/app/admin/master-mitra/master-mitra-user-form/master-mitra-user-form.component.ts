import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'master-mitra-user-form',
  templateUrl: './master-mitra-user-form.component.html',
  styleUrls: ['./master-mitra-user-form.component.sass']
})
export class MasterMitraUserFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
  fgUser: FormGroup
  errorMsg
  submitting

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.fg = this.fb.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      npwp: [null, [Validators.required]],
      status: [0, [Validators.required]]
    })
    this.fg.disable();
    this.fgUser = this.fb.group({
      user: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/admin', 'mitra'])
  }

}
