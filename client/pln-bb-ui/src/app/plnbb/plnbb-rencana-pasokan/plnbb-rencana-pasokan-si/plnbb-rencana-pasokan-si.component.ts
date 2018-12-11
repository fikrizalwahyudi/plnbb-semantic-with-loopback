import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plnbb-rencana-pasokan-si',
  templateUrl: './plnbb-rencana-pasokan-si.component.html',
  styles: []
})
export class PlnbbRencanaPasokanSiComponent implements OnInit {

  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg: FormGroup


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.fg = this.fb.group({
      no: [null, [Validators.required]],
      tgl: [null, [Validators.required]],
      plnRencanaId: [null, [Validators.required]],
      namaTransport: [null, [Validators.required]],
      jetty: [null, [Validators.required]],
      laycan: [null, [Validators.required]],
      transportId: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

}
