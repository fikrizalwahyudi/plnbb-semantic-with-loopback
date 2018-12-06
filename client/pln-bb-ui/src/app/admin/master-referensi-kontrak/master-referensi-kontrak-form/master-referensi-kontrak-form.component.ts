import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'master-referensi-kontrak-form',
  templateUrl: './master-referensi-kontrak-form.component.html',
  styleUrls: ['./master-referensi-kontrak-form.component.sass']
})
export class MasterReferensiKontrakFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
  errorMsg
  submitting
  jenis = [
    {
      id:1,
      name:"CIF"
    },
    {
      id:2,
      name:"FOB"
    }
  ]

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) {
    this.fg = this.fb.group({
      nomorKontrak: [null, [Validators.required]],
      namaPekerjaan: [null, [Validators.required]],
      tanggalPekerjaan: [new Date(), [Validators.required]],
      jenis: [null, [Validators.required]]
    })
   }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/admin', 'referensi-kontrak'])
  }

}
