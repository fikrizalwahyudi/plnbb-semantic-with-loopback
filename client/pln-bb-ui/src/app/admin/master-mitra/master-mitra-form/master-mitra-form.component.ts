import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'master-mitra-form',
  templateUrl: './master-mitra-form.component.html',
  styleUrls: ['./master-mitra-form.component.sass']
})
export class MasterMitraFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
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
      status: [1, [Validators.required]]
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