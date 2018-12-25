import { Component, OnInit } from '@angular/core';
import { ShippingApi } from '../../shared/sdk';
import { ShippingLoadingApi } from '../../shared/sdk/services/custom/ShippingLoading';

@Component({
  selector: 'app-plnbb-verifikasi-loading',
  templateUrl: './plnbb-verifikasi-loading.component.html',
  styleUrls: ['./plnbb-verifikasi-loading.component.sass']
})
export class PlnbbVerifikasiLoadingComponent implements OnInit {

  daftarShipping

  constructor(
    private shippingApi:ShippingApi,
    private loadingApi:ShippingLoadingApi
  ) { 

  }

  ngOnInit() {
  }

}
