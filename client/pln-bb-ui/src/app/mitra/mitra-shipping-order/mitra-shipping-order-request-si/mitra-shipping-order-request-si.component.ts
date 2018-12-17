import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { Jetty } from '../../../shared/sdk/models/Jetty';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupanApi } from '../../../shared/sdk';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { ShippingInstructionApi } from '../../../shared/sdk/services/custom/ShippingInstruction';
import { ShippingInstruction } from '../../../shared/sdk/models/ShippingInstruction';
import { MitraShippingOrderApi } from '../../../shared/sdk/services/custom/MitraShippingOrder';
import { MitraShippingInstructionRequestApi } from '../../../shared/sdk/services/custom/MitraShippingInstructionRequest';

@Component({
  selector: 'app-mitra-shipping-order-request-si',
  templateUrl: './mitra-shipping-order-request-si.component.html',
  styleUrls: ['./mitra-shipping-order-request-si.component.sass']
})
export class MitraShippingOrderRequestSiComponent implements OnInit {

  errorMsg
  submitting
  status = 'baru';
  maxNo = 1;
  id

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
    private mitraShippingOrderApi: MitraShippingOrderApi,
    private mitraShippingRequestApi: MitraShippingInstructionRequestApi,
    private mitraApi: MitraApi,
    private jettyApi: JettyApi,
    private shippingInstructionApi: ShippingInstructionApi
  ) {
    this.fg = this.fb.group({
      laycanStartDate: [null, [Validators.required]],
      laycanEndDate: [null, [Validators.required]],
      //transportId: null,
      namaTransport: null,
      //jettyId: null
    });

    this.generateNo();
  }

  ngOnInit() {
    let temp = new ShippingInstruction;
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.mitraShippingOrderApi.findById(this.id, { include: ['mitraKesanggupan', 'rencanaPasokan', 'mitra'] }).subscribe((so: any) => {

        this.dataMitraKesanggupan = so.mitraKesanggupan;

        this.getMitra();
        this.getJetty();
        //console.log(this.dataMitraKesanggupan)

        /*this.shippingInstructionApi.findOne({ where: { plnRencanaId: idMitraKesanggupan } }).subscribe((resultShip: ShippingInstruction) => {
          this.fg.patchValue(resultShip);
          let no = this.fg.controls['no'].value;
          let kode = this.fg.controls['kode'].value;
          let tahun = this.fg.controls['tahun'].value;
          this.fg.patchValue({ "no": no + '/' + kode + '/' + tahun });
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
          });*/

      })
    });
  }

  generateNo() {
    this.fg.patchValue({ 'no': this.maxNo + '/SI/DIRPLNBB/' + new Date().getFullYear() });
    this.shippingInstructionApi.find({ where: { tahun: new Date().getFullYear() + '' } }).subscribe((result: [ShippingInstruction]) => {

      result.forEach((element:any) => {
        if (parseInt(element.no) >= this.maxNo) {
          this.maxNo = parseInt(element.no) + 1;
          console.log(parseInt(element.no));
          this.fg.patchValue({ 'no': this.maxNo + '/SI/DIRPLNBB/' + new Date().getFullYear() });
        }
      });
    },
      error => {
        if (error.status == 404) {
        } else {
          alert('terdapat Error: ' + error.message);
          console.log(error);
        }
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
    
    let model = this.fg.value
    model.tglRequest = new Date()
    model.shippingOrderId = this.id
    
    //console.log(model)

    this.mitraShippingRequestApi.create(model).subscribe(() => {
      this.mitraShippingOrderApi.patchAttributes(this.id, {lock: true}).subscribe(() => {
        this.router.navigate(['/mitra', 'shipping-order'])
      })
    })

    /*this.shippingInstructionApi.replaceOrCreate(this.fg.value).subscribe(() => {
      this.router.navigate(['/mitra', 'shipping-order'])
    }, (err) => {
      this.errorMsg = err.message
      this.submitting = false
    })*/
  }

}
