import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'master-tambang-form',
  templateUrl: './master-tambang-form.component.html',
  styleUrls: ['./master-tambang-form.component.sass']
})
export class MasterTambangFormComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
  errorMsg
  submitting
  jenisSertifikat = [
    {
      id:1,
      name:"Izin Usaha Pertambangan (IUP)"
    },
    {
      id:2,
      name:"Izin Usaha Pertambangan Khusus (IUPK)"
    },
    {
      id:3,
      name:"Izin Pertambangan Rakyat"
    }
  ]

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.fg = this.fb.group({
      name: [null, [Validators.required]],
      sertifikat: [null, [Validators.required]],
      jenisSertifikat: [null, [Validators.required]],
      lokasi:[null, [Validators.required]],
      tanggalBerlaku: [new Date(), [Validators.required]],
      tanggalHabis: [new Date(), [Validators.required]],
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
    this.router.navigate(['/admin', 'tambang'])
  }

}
