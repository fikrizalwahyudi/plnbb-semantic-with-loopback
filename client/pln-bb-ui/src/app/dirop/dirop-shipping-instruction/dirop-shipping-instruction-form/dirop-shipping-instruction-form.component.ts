import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalBlockComponent } from '../../../shared/commons/modal-block/modal-block.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingInstructionRevisionApi, ShippingInstructionApi, ShippingApi } from '../../../shared/sdk';
import { Router, ActivatedRoute } from '@angular/router';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ShippingInstruction } from '../../../shared/sdk/models/ShippingInstruction';

@Component({
  selector: 'app-dirop-shipping-instruction-form',
  templateUrl: './dirop-shipping-instruction-form.component.html',
  styleUrls: ['./dirop-shipping-instruction-form.component.sass']
})
export class DiropShippingInstructionFormComponent implements OnInit {

  @ViewChild('approveModal') approveModal:ModalBlockComponent
  @ViewChild('rejectModal') rejectModal:ModalBlockComponent

  approveFg:FormGroup
  rejectFg:FormGroup

  si:ShippingInstruction
  errorMsg
  submitting = false
  
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    private siApi:ShippingInstructionApi,
    private siRevisionApi:ShippingInstructionRevisionApi,
    private shippingApi:ShippingApi,
    private userApi:UserApi
  ) { 
    this.approveFg = this.fb.group({
      pin: [null, [Validators.required]]
    })

    this.rejectFg = this.fb.group({
      keterangan: [null, [Validators.required]]
    })

    this.route.params.subscribe(params => {
      let id = params['id']

      this.siApi.findById(id, {include: [{'siRequest': {'shippingOrder': ['mitraKesanggupan', 'rencanaPasokan']}}, 'transport', 'jetty']}).subscribe(data => {
        this.si = data as ShippingInstruction

        console.log(data)
      })
    })
  }

  ngOnInit() {
  }

  approve() {
    this.approveModal.open({})
  }

  doApprove(canceled) {
    if(canceled)
      return false

    let model = this.approveFg.value

    //console.log(model)
    this.http.post(`${environment.apiUrl}/pdf/si/${this.si.id}/sign`, {}).subscribe(data => {
      let modelShipping = {
        mitraId: this.si.siRequest.shippingOrder.mitraId,
        transportId: this.si.transportId,
        referensiKontrakId: this.si.siRequest.shippingOrder.mitraKesanggupan.referensiKontrakId,
        tujuanPltuId: this.si.siRequest.shippingOrder.mitraKesanggupan.tujuanPltuId,
        jettyId: this.si.jettyId,
        siId: this.si.id,
        laycanStartDate: this.si.laycanStartDate,
        laycanEndDate: this.si.laycanEndDate,
        jumlah: this.si.siRequest.shippingOrder.mitraKesanggupan.jumlah,
        harga: this.si.siRequest.shippingOrder.mitraKesanggupan.harga,
        moda: this.si.siRequest.shippingOrder.mitraKesanggupan.mode,
        tipe: this.si.siRequest.shippingOrder.mitraKesanggupan['tipe'],
        jenisBatubara: this.si.siRequest.shippingOrder.mitraKesanggupan['jenis']
      }

      this.shippingApi.create(modelShipping).subscribe(data => {
        this.siApi.patchAttributes(this.si.id, {status: 3}).subscribe(data => {
          this.approveModal.close()
          this.router.navigate(['/dirop', 'shipping-instruction'])
        })
      })
    })
  }

  reject() {
    this.rejectModal.open({})
  }

  doReject(canceled) {
    if(canceled)
      return false

    this.submitting = true

    let model = this.rejectFg.value
    let submitData = (no) => {
      model.noRevisi = no
      model.tglRevisi = new Date()
      model.siId = this.si.id

      this.siRevisionApi.create(model).subscribe(data => {
        this.siApi.patchAttributes(this.si.id, {status: 2}).subscribe(data => {
          this.router.navigate(['/dirop', 'shipping-instruction'])

          this.rejectModal.close()
        })
      })
    }

    this.siRevisionApi.findOne({where: {siId: this.si.id}, order: ['noRevisi']}).subscribe((data:any) => {
      submitData(data.noRevisi + 1)
    }, err => {
      submitData(1)
    })
  }

  doComplete() {
    this.approveFg.reset()
    this.rejectFg.reset()

    this.submitting = false
  }

}
