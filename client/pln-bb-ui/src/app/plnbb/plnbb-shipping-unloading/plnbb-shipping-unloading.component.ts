import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShippingUnloadingApi } from '../../shared/sdk/services/custom/ShippingUnloading';

@Component({
  selector: 'app-plnbb-shipping-unloading',
  templateUrl: './plnbb-shipping-unloading.component.html',
  styleUrls: ['./plnbb-shipping-unloading.component.sass']
})
export class PlnbbShippingUnloadingComponent implements OnInit {

  errorMsg
  submitting
  shippingId

  fg:FormGroup

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private shiipingUnloadingApi:ShippingUnloadingApi
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
      timeArrival: [new Date(), [Validators.required]],
      berthing: [new Date(), [Validators.required]],
      commenceUnloading: [new Date(), [Validators.required]],
      completeUnloading: [new Date(), [Validators.required]]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.shippingId = params['id'];
    });
  }

  fileCoaCowChange(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      const file:File = event.target.files[0];
      //if(file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg') {
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.avatar = reader.result;
        //this.avatarUri = file;
      }
    }
  }

  save() {
    this.submitting = true
    this.errorMsg = undefined

    let model = this.fg.value
    model.shippingId = this.shippingId

    this.shiipingUnloadingApi.create(model).subscribe(data => {
      this.submitting = false

      this.router.navigate(['/plnbb', 'monitoring-pengiriman'])
    }, err => {
      this.submitting = false
      this.errorMsg = err.message
    })
    
  }

}
