import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { MitraApi } from '../../../shared/sdk';

@Component({
  selector: 'app-plnbb-rencana-pasokan-si',
  templateUrl: './plnbb-rencana-pasokan-si.component.html',
  styles: []
})
export class PlnbbRencanaPasokanSiComponent implements OnInit {

  @Output('init') onInit = new EventEmitter();
  @Output('save') onSave = new EventEmitter();

  fg: FormGroup;
  dataMitraKesanggupan:MitraKesanggupan;
  arrMitraShipping:[Mitra];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mitraKesanggupanApi: MitraKesanggupanApi,
    private mitraApi: MitraApi
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
    this.route.params.subscribe(params => {
      let idMitraKesanggupan = params['idMitraKesanggupan'];
      let cond = { where: 
        { id: idMitraKesanggupan },
        include: ['tujuanPltu', 'sumberTambang', { referensiKontrak: ['mitra'] }]
      }
      this.mitraKesanggupanApi.findOne(cond).subscribe((result:MitraKesanggupan) => {
        this.dataMitraKesanggupan=result;
        console.log(result);
      },
        error => {
          alert('terdapat Error: ' + error.message);
          console.log(error);
        });
    });
    this.getMitra();
  }

  getMitra(){
    this.mitraApi.find().subscribe((result:[Mitra]) =>{
      this.arrMitraShipping=result;
    },
    error =>{
      alert('terdapat Error: ' + error.message);
      console.log(error);
    });
  }

}
