import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Shipping } from '../../../shared/sdk/models/Shipping';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ShippingApi } from '../../../shared/sdk/services/custom/Shipping';
import { ShippingLoadingApi } from '../../../shared/sdk/services/custom/ShippingLoading';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../environments/environment.prod';
import { ShippingLoading } from '../../../shared/sdk/models/ShippingLoading';

@Component({
  selector: 'app-plnbb-verifikasi-loading-form',
  templateUrl: './plnbb-verifikasi-loading-form.component.html',
  styleUrls: ['./plnbb-verifikasi-loading-form.component.sass']
})
export class PlnbbVerifikasiLoadingFormComponent implements OnInit {

  fg:FormGroup
  file
  fileUri:any = {}
  shipping:Shipping
  loading:ShippingLoading

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
      coaCow: [null, [Validators.required]]
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
          }
        })
      })
    })

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
        } else {
          alert('can only accept pdf file');
          return false;
        }
      }
    }
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

    /*this.uploadCoaCow().subscribe((data:any) => {
      //console.log(data)
      if(data) {
        let file = data.result.files.file[0]
      
        model.coaCow = file.name
      }

      model.shippingId = this.shipping.id
      model.status = 1

      this.loadingApi.upsertWithWhere({shippingId: this.shipping.id}, model).subscribe(data => {
        this.router.navigate(['/mitra', 'kesanggupan-pasokan', 'browse', 'inprogress'])
      })
    })*/

    
  }

  get docUrl() { return `${environment.apiUrl}/api/documents/coacow-loading/download/${this.loading.coaCow}` }

}
