import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { MitraApi } from '../../../shared/sdk';
import { Jetty } from '../../../shared/sdk/models/Jetty';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { ShippingInstructionApi } from '../../../shared/sdk/services/custom/ShippingInstruction';
import { ShippingInstruction } from '../../../shared/sdk/models/ShippingInstruction';

@Component({
  selector: 'app-plnbb-rencana-pasokan-si',
  templateUrl: './plnbb-rencana-pasokan-si.component.html',
  styles: []
})
export class PlnbbRencanaPasokanSiComponent implements OnInit {

  @Output('init') onInit = new EventEmitter();
  @Output('save') onSave = new EventEmitter();

  errorMsg
  submitting
  status='baru';

  fg: FormGroup;
  dataMitraKesanggupan: MitraKesanggupan;
  arrMitraShipping: [Mitra];
  arrJetty: [Jetty];
  tempDate: Object;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mitraKesanggupanApi: MitraKesanggupanApi,
    private mitraApi: MitraApi,
    private jettyApi: JettyApi,
    private shippingInstructionApi: ShippingInstructionApi
  ) {
    this.fg = this.fb.group({
      id: [null],
      no: [null, [Validators.required]],
      tgl: [null, [Validators.required]],
      namaTransport: [null, [Validators.required]],
      jetty: [null, [Validators.required]],
      laycanStartDate: [null, [Validators.required]],
      laycanEndDate: [null, [Validators.required]],
      transportId: [null, [Validators.required]],
      plnRencanaId: [null, [Validators.required]]
    });
    this.fg.patchValue({ 'no': 'SI/DIRPLNBB/' + new Date().getFullYear() });


  }

  ngOnInit() {
    let temp = new ShippingInstruction;
    this.route.params.subscribe(params => {
      let idMitraKesanggupan = params['idMitraKesanggupan'];
      this.fg.patchValue({ 'plnRencanaId': idMitraKesanggupan });
      let cond = {
        where:
          { id: idMitraKesanggupan },
        include: ['tujuanPltu', 'sumberTambang', { referensiKontrak: ['mitra'] }]
      }
      this.mitraKesanggupanApi.findOne(cond).subscribe((result: MitraKesanggupan) => {
        this.dataMitraKesanggupan = result;
        this.shippingInstructionApi.findOne({ where: { plnRencanaId: idMitraKesanggupan } }).subscribe((resultShip: ShippingInstruction) => {
          temp = resultShip;
          this.fg.patchValue(resultShip);
          this.getMitra();
          this.getJetty();
        },
          error => {
            if (error.status == 404) {
              // this.
              this.getMitra();
              this.getJetty();
            } else {
              alert('terdapat Error: ' + error.message);
              console.log(error);
            }
          });
      },
        error => {
          alert('terdapat Error: ' + error.message);
          console.log(error);
        });
    });
  }

  getMitra() {
    this.mitraApi.find().subscribe((result: [Mitra]) => {
      this.arrMitraShipping = result;
    },
      error => {
        alert('terdapat Error: ' + error.message);
        console.log(error);
      });
  }

  getJetty() {
    this.jettyApi.find().subscribe((result: [Jetty]) => {
      this.arrJetty = result;
    },
      error => {
        alert('terdapat Error: ' + error.message);
        console.log(error);
      });
  }

  save() {
    this.submitting = true
    this.errorMsg = undefined
    this.shippingInstructionApi.replaceOrCreate(this.fg.value).subscribe(() => {
      this.router.navigate(['/plnbb', 'rencana-pasokan'])
    }, (err) => {
      this.errorMsg = err.message
      this.submitting = false
    })
  }

}
