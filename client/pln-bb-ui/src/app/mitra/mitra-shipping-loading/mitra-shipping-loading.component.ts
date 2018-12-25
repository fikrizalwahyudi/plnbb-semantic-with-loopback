import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ShippingLoadingApi } from '../../shared/sdk/services/custom/ShippingLoading';
import { Router, ActivatedRoute } from '@angular/router';
import { ShippingApi } from '../../shared/sdk';
import { Shipping } from '../../shared/sdk/models/Shipping';
import { PdfDirective } from '../../shared/directives/pdf.directive';

@Component({
  selector: 'app-mitra-shipping-loading',
  templateUrl: './mitra-shipping-loading.component.html',
  styleUrls: ['./mitra-shipping-loading.component.sass']
})
export class MitraShippingLoadingComponent implements OnInit {

  @ViewChild(PdfDirective)
  pdfEl:PdfDirective

  fg:FormGroup
  file
  file2
  fileUri:any = {}
  fileUri2:any = {}
  shipping:Shipping
  viewTab = 1
  readonly = false

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

      this.shippingApi.findById(id, {include: 'loading'}).subscribe(data => {
        this.shipping = data as Shipping
        
        if(this.shipping.loading) {
          this.fg.patchValue(this.shipping.loading)

          if(this.shipping.loading.status == 3)
            this.readonly = true

          this.pdfEl.reload(undefined, `${environment.apiUrl}/api/documents/coacow-loading/download/${this.shipping.loading.coaCow}`)
        }
      })
    })
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

      this.http.post(`${environment.apiUrl}/api/documents/timesheets-loading/upload`, req).subscribe(resp => {
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

      this.http.post(`${environment.apiUrl}/api/documents/coacow-loading/upload`, req).subscribe(resp => {
        observer.next(resp);
        observer.complete();
      })
    });
  }

  save() {
    let model = this.fg.value

    this.uploadCoaCow().subscribe((data:any) => {
      //console.log(data)
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
        model.status = 1

        //console.log(model)

        this.loadingApi.upsertWithWhere({shippingId: this.shipping.id}, model).subscribe(data => {
          this.router.navigate(['/mitra', 'kesanggupan-pasokan', 'browse', 'inprogress'])
        })
      })
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
}
