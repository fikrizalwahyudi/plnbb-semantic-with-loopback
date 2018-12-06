import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master-referensi-kontrak-pltu',
  templateUrl: './master-referensi-kontrak-pltu.component.html',
  styleUrls: ['./master-referensi-kontrak-pltu.component.sass']
})
export class MasterReferensiKontrakPltuComponent implements OnInit {

  fg:FormGroup

  constructor(
    private fb:FormBuilder
  ) { 

    this.fg = this.fb.group({
      
    })

  }

  ngOnInit() {
  }

}
