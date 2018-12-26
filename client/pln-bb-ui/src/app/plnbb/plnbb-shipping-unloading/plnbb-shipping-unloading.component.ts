import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShippingUnloadingApi } from '../../shared/sdk/services/custom/ShippingUnloading';
import { ShippingApi } from '../../shared/sdk/services/custom/Shipping';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { PdfDirective } from '../../shared/directives/pdf.directive';
import { Shipping } from '../../shared/sdk/models/Shipping';

@Component({
  selector: 'app-plnbb-shipping-unloading',
  templateUrl: './plnbb-shipping-unloading.component.html',
  styleUrls: ['./plnbb-shipping-unloading.component.sass']
})
export class PlnbbShippingUnloadingComponent implements OnInit {

  @ViewChild(PdfDirective)
  pdfEl:PdfDirective

  errorMsg
  submitting
  //shippingId
  viewTab = 1
  readonly = false

  file
  file2
  fileUri:any = {}
  fileUri2:any = {}
  shipping:Shipping

  fg:FormGroup

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient,
    private shippingUnloadingApi:ShippingUnloadingApi,
    private shippingApi:ShippingApi
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
      commenceUnloading: [null, [Validators.required]],
      completeUnloading: [null, [Validators.required]],
      timesheets: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];

      this.shippingApi.findById(id, {include: 'unloading'}).subscribe(data => {
        this.shipping = data as Shipping
        console.log(data)
        if(this.shipping.unloading) {
          this.fg.patchValue(this.shipping.unloading)

          if(this.shipping.unloading.status == 3)
            this.readonly = true

          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/coacow-unloading/download/${this.shipping.unloading.coaCow}`)
        }
      })
    });
  }

  fileTimesheetsChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file:File = event.target.files[0];
      //console.log(file)
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(file.name.endsWith('.pdf')) {
          //console.log(reader.result)
          this.file2 = reader.result;
          this.fileUri2 = file;

          this.fg.patchValue({timesheets: file.name})

          setTimeout(() => {this.pdfEl.reload(undefined, this.file2)}, 10)
        } else {
          alert('can only accept pdf file');
          return false;
        }
      }
    }
  }

  fileCoaCowChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file:File = event.target.files[0];
      //console.log(file)
      reader.readAsDataURL(file);
      reader.onload = () => {
        if(file.name.endsWith('.pdf')) {
          //console.log(reader.result)
          this.file = reader.result;
          this.fileUri = file;

          this.fg.patchValue({coaCow: file.name})

          setTimeout(() => {this.pdfEl.reload(undefined, this.file)}, 10)
        } else {
          alert('can only accept pdf file');
          return false;
        }
      }
    }
  }

  uploadTimesheets() {
    return new Observable(observer => {
      if(!this.file2 || !this.fileUri2) {
        observer.next(undefined);
        observer.complete();
        
        return;
      }

      const req = new FormData();
      const fileName = this.fileUri2.name;
      req.append('file', this.fileUri2, fileName);

      this.http.post(`${environment.apiUrl}/api/documents/timesheets-unloading/upload`, req).subscribe(resp => {
        observer.next(resp);
        observer.complete();
      })
    });
  }

  uploadCoaCow() {
    return new Observable(observer => {
      if(!this.file || !this.fileUri) {
        observer.next(undefined);
        observer.complete();
        
        return;
      }

      const req = new FormData();
      const fileName = this.fileUri.name;
      req.append('file', this.fileUri, fileName);

      this.http.post(`${environment.apiUrl}/api/documents/coacow-unloading/upload`, req).subscribe(resp => {
        observer.next(resp);
        observer.complete();
      })
    });
  }

  save() {
    this.submitting = true
    this.errorMsg = undefined

    let model = this.fg.value

    //console.log(model)

    //return false
    
    this.uploadCoaCow().subscribe((data:any) => {
      if(data) {
        let file = data.result.files.file[0]
      
        model.coaCow = file.name
      }

      this.uploadTimesheets().subscribe((data2:any) => {
        if(data2) {
          let file = data2.result.files.file[0]
      
          model.timesheets = file.name
        }

        model.shippingId = this.shipping.id
        model.status = 3

        this.shippingUnloadingApi.upsertWithWhere({shippingId: this.shipping.id}, model).subscribe(data => {
          this.shippingApi.patchAttributes(this.shipping.id, {status:3}).subscribe(obj=>{
            this.submitting = false
            this.router.navigate(['/plnbb', 'monitoring-pengiriman'])
          })
        }, err => {
          this.submitting = false
          this.errorMsg = err.message
        })
      })
    })
  }

  cancel() {
    this.router.navigate(['/plnbb', 'monitoring-pengiriman'])
  }

  tab(id) {
    setTimeout(() => {
      if(id == 1) {
        if(!this.file && this.shipping.unloading)
          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/coacow-unloading/download/${this.shipping.unloading.coaCow}`)
        else
          this.pdfEl.reload(undefined, this.file)
      } else if(id == 2) {
        if(!this.file2 && this.shipping.unloading)
          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/timesheets-unloading/download/${this.shipping.unloading.timesheets}`)
        else
          this.pdfEl.reload(undefined, this.file2)
      }
    }, 10)

    this.viewTab = id
  }

}
