import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shipping } from '../../../shared/sdk/models/Shipping';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ShippingApi } from '../../../shared/sdk/services/custom/Shipping';
import { ShippingLoadingApi } from '../../../shared/sdk/services/custom/ShippingLoading';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../environments/environment.prod';
import { ShippingLoading } from '../../../shared/sdk/models/ShippingLoading';
import { PdfDirective } from '../../../shared/directives/pdf.directive';

@Component({
  selector: 'app-plnbb-verifikasi-loading-form',
  templateUrl: './plnbb-verifikasi-loading-form.component.html',
  styleUrls: ['./plnbb-verifikasi-loading-form.component.sass']
})
export class PlnbbVerifikasiLoadingFormComponent implements OnInit {

  @ViewChild(PdfDirective)
  pdfEl:PdfDirective

  fg:FormGroup
  file
  file2
  fileUri:any = {}
  fileUri2:any = {}
  shipping:Shipping
  loading:ShippingLoading
  viewTab = 1

  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute,
    private shippingApi:ShippingApi,
    private loadingApi:ShippingLoadingApi
  ) { 
    this.fg = this.fb.group({
      gcv: [null, [Validators.required]],
      ash: [null, [Validators.required]],
      hgi: [null, [Validators.required]],
      tm: [null, [Validators.required]],
      ts: [null, [Validators.required]],
      idt: [null, [Validators.required]],
      size1: [null, [Validators.required]],
      size2: [null, [Validators.required]],
      coaCow: [null, [Validators.required]],

      ta: [null, [Validators.required]],
      berthing: [null, [Validators.required]],
      commenceLoading: [null, [Validators.required]],
      completeLoading: [null, [Validators.required]],
      timesheets: [null, [Validators.required]]
    })
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let id = params['id']

      this.loadingApi.findById(id).subscribe((data:any) => {
        this.loading = data as ShippingLoading

        this.shippingApi.findById(data.shippingId, {include: 'loading'}).subscribe(data => {
          this.shipping = data as Shipping
          
          //console.log(this.shipping)
          if(this.shipping.loading) {
            this.fg.patchValue(this.shipping.loading)

            setTimeout(() => {
              this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/coacow-loading/download/${this.loading.coaCow}`)
            }, 10)
          }
        })
      })
    })

  }

  reject() {
    this.loadingApi.patchAttributes(this.loading.id, {status: 0}).subscribe(() => {
      this.router.navigate(['/plnbb', 'verifikasi-loading'])
    })
  }

  approve() {
    //let model = this.fg.value

    this.loadingApi.patchAttributes(this.loading.id, {status: 3}).subscribe(() => {
      this.router.navigate(['/plnbb', 'verifikasi-loading'])
    })
  }

  tab(id) {
    setTimeout(() => {
      if(id == 1) {
        if(!this.file)
          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/coacow-loading/download/${this.shipping.loading.coaCow}`)
        else
          this.pdfEl.reload(undefined, this.file)
      } else if(id == 2) {
        if(!this.file2)
          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/timesheets-loading/download/${this.shipping.loading['timesheets']}`)
        else
          this.pdfEl.reload(undefined, this.file2)
      }
    }, 10)

    this.viewTab = id
  }

  get docUrl() { return `${environment.apiUrl}/api/documents/coacow-loading/download/${this.loading.coaCow}` }

}
