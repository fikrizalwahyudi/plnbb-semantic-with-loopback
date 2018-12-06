import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Pltu } from '../../shared/models/pltu';
import { PltuApi } from '../../shared/sdk/services/custom/Pltu';
import { MitraApi } from '../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../shared/sdk/models/Mitra';

@Component({
  selector: 'plnbb-rencana-pasokan',
  templateUrl: './plnbb-rencana-pasokan.component.html',
  styleUrls: ['./plnbb-rencana-pasokan.component.sass']
})
export class PlnbbRencanaPasokanComponent implements OnInit {
  fg:FormGroup
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  pltus: Pltu[];
  mitras:Mitra[]
  errorMsg: string;

  constructor(private fb:FormBuilder, 
    private pltuApi: PltuApi, private mitraApi:MitraApi) { 
    
    this.fg = this.fb.group({
      tahun: [2018, [Validators.required]],
      bulan: [(new Date()).getMonth(), [Validators.required]],
      pltu: [null, [Validators.required]],
      mitra: [null, [Validators.required]],
      tgl: [new Date(), [Validators.required]]
    })

    this.pltuApi.find().subscribe(data => {
      this.pltus = data as Pltu[]
    })

    this.mitraApi.find().subscribe(data => {
      this.mitras = data as Mitra[]
    })
  }

  ngOnInit() {
  }

}
