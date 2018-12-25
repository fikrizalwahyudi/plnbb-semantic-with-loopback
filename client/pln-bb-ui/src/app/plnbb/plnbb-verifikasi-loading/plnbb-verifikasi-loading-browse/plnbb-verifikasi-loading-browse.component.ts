import { Component, OnInit } from '@angular/core';
import { ShippingApi } from '../../../shared/sdk/services/custom/Shipping';
import { ShippingLoadingApi } from '../../../shared/sdk/services/custom/ShippingLoading';

@Component({
  selector: 'app-plnbb-verifikasi-loading-browse',
  templateUrl: './plnbb-verifikasi-loading-browse.component.html',
  styleUrls: ['./plnbb-verifikasi-loading-browse.component.sass']
})
export class PlnbbVerifikasiLoadingBrowseComponent implements OnInit {

  daftarShipping

  constructor(
    private shippingApi:ShippingApi,
    private loadingApi:ShippingLoadingApi
  ) { 

    this.loadingApi.find({where: {status: 1}, include: [{'shipping': ['mitra', 'transport', 'referensiKontrak', 'tujuanPltu', 'jetty', 'si']}]}).subscribe(data => {
      //console.log(data)
      this.daftarShipping = data
    })

  }

  ngOnInit() {
  }

}
