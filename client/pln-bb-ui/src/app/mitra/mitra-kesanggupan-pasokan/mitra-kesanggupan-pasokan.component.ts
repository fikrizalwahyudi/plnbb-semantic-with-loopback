import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MitraApi } from '../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../shared/sdk/models/Mitra';

@Component({
  selector: 'mitra-kesanggupan-pasokan',
  templateUrl: './mitra-kesanggupan-pasokan.component.html',
  styleUrls: ['./mitra-kesanggupan-pasokan.component.sass']
})
export class MitraKesanggupanPasokanComponent implements OnInit {
  fg:FormGroup
  months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  years = [];
  mitra: Mitra[];
  mitras:Mitra[];
  errorMsg: string;

  constructor(private fb:FormBuilder, 
    private mitraApi: MitraApi) 
  {
    for(let i=2018-10; i<2019; i++) {
      this.years.push(i)
    }

    this.fg = this.fb.group({
      kontrak: [null, [Validators.required]],
      tambang: [null, [Validators.required]],
      pltu: [null, [Validators.required]],
      tgl: [null, [Validators.required]],
      jumlah: [null, [Validators.required]],
      mode: [null, [Validators.required]],
      keterangan: [null, [Validators.required]]
    })

    this.mitraApi.find().subscribe(data => {
      this.mitras = data as Mitra[]
    })

    this.mitraApi.find().subscribe(data => {
      this.mitras = data as Mitra[]
    })
  }

  ngOnInit() {
  }

}
