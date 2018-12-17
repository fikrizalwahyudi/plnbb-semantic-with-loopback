import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MitraKesanggupan } from '../../../shared/sdk/models/MitraKesanggupan';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { Jetty } from '../../../shared/sdk/models/Jetty';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { MitraApi, MitraShippingInstructionRequestApi } from '../../../shared/sdk';
import { JettyApi } from '../../../shared/sdk/services/custom/Jetty';
import { ShippingInstructionApi } from '../../../shared/sdk/services/custom/ShippingInstruction';
import { ShippingInstruction } from '../../../shared/sdk/models/ShippingInstruction';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-plnbb-shipping-instruction-form',
  templateUrl: './plnbb-shipping-instruction-form.component.html',
  styleUrls: ['./plnbb-shipping-instruction-form.component.sass']
})
export class PlnbbShippingInstructionFormComponent implements OnInit {

  errorMsg
  submitting
  status = 'baru'
  maxNo = 1
  isCif = false
  siRequest

  fg: FormGroup;
  dataMitraKesanggupan: MitraKesanggupan;
  //arrMitraShipping: [Mitra];
  //arrJetty: [Jetty];
  tempDate: Object;
  jettyObserver
  mitraObserver

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private mitraKesanggupanApi: MitraKesanggupanApi,
    private mitraApi: MitraApi,
    private jettyApi: JettyApi,
    private siRequestApi: MitraShippingInstructionRequestApi,
    private shippingInstructionApi: ShippingInstructionApi
  ) {
    this.fg = this.fb.group({
      no: [1, [Validators.required]],
      noRedaksi: ['SI/DIRPLNBB', [Validators.required]],
      noTahun: [(new Date()).getFullYear(), [Validators.required]],
      tglSurat: [new Date(), [Validators.required]],
      laycanStartDate: [null, [Validators.required]],
      laycanEndDate: [null, [Validators.required]],
      transportId: [null, [Validators.required]],
      namaTransport: [null, [Validators.required]],
      jettyId: [null, [Validators.required]]
    });

    this.generateNo()
    //this.jettyObserver = this.getJetty()
    //this.mitraObserver = this.getMitra()
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.siRequestApi.findById(id, { include: [{ 'shippingOrder': { 'mitraKesanggupan': ['jetty', 'mitra'] }}, 'shippingInstruction'] }).subscribe((data: any) => {
        this.siRequest = data
        
        this.fg.patchValue({
          laycanStartDate: data.laycanStartDate,
          laycanEndDate: data.laycanEndDate,
          namaTransport: data.namaTransport,
          jettyId: {
            name: data.shippingOrder.mitraKesanggupan.jetty.name,
            value: data.shippingOrder.mitraKesanggupan.jetty.id
          }
        })

        if (data.shippingOrder.mitraKesanggupan.tipe === 'cif') {
          this.fg.patchValue({
            transportId: {
              name: data.shippingOrder.mitraKesanggupan.mitra.name,
              value: data.shippingOrder.mitraKesanggupan.mitra.id
            }
          })

          this.isCif = true
        }
      })
    })
  }

  generateNo() {
    this.shippingInstructionApi.findOne({
      where: { tahun: new Date().getFullYear() },
      order: 'no DESC'
    }).subscribe((result: any) => {
      
    }, error => {
      //this.errorMsg = error.message
    });
  }

  save() {
    this.submitting = true
    this.errorMsg = undefined

    let model = this.fg.value

    model.siRequestId = this.siRequest.id
    model.transportId = model.transportId.value
    model.jettyId = model.jettyId.value

    //console.log(model)
    this.shippingInstructionApi.create(model).subscribe(data => {
      this.submitting = false

      this.router.navigate(['/plnbb', 'shipping-instruction'])
    }, err => {
      this.submitting = true
      this.errorMsg = err.message
    })
  }

  getJetty = (q?) => {
    let filter = {
      limit: 10
    }

    if (!_.isEmpty(q))
      filter['where'] = { name: { like: `.*${q}.*`, options: 'i' } }

    return this.jettyApi.find(filter).map((data: any) => {
      return data.map(entry => {
        return {
          name: entry.name,
          value: entry.id
        }
      })
    });
  }

  getMitra = (q?) => {
    let filter = {
      limit: 10
    }

    if (!_.isEmpty(q))
      filter['where'] = { name: { like: `.*${q}.*`, options: 'i' } }

    return this.mitraApi.find(filter).map((data: any) => {
      return data.map(entry => {
        return {
          name: entry.name,
          value: entry.id
        }
      })
    });
  }
}