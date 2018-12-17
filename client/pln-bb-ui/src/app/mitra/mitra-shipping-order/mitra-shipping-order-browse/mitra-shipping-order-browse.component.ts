import { Component, OnInit } from '@angular/core';
import { MitraShippingOrderApi } from '../../../shared/sdk/services/custom/MitraShippingOrder';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';

@Component({
  selector: 'app-mitra-shipping-order-browse',
  templateUrl: './mitra-shipping-order-browse.component.html',
  styleUrls: ['./mitra-shipping-order-browse.component.sass']
})
export class MitraShippingOrderBrowseComponent implements OnInit {

  so

  constructor(
    private userApi:UserApi,
    private mitraApi:MitraApi,
    private soApi:MitraShippingOrderApi
  ) { 
    this.mitraApi.findOne({where:{userId: this.userApi.getCurrentId()}}).subscribe((mitra:any) => {
      this.soApi.find({where: {mitraId: mitra.id}, include: [{'mitraKesanggupan': ['jetty', 'tujuanPltu']}, 'rencanaPasokan']}).subscribe(data => {
        this.so = data
        console.log(data)
      })
    })
  }

  ngOnInit() {
  }

}
