import { Component, OnInit } from '@angular/core';
import { MitraShippingOrderApi } from '../shared/sdk/services/custom/MitraShippingOrder';
import { UserApi } from '../shared/sdk/services/custom/User';
import { MitraApi } from '../shared/sdk/services/custom/Mitra';
import { Mitra } from '../shared/sdk/models/Mitra';

declare var $: any;
@Component({
  selector: 'app-mitra',
  templateUrl: './mitra.component.html',
  styleUrls: ['./mitra.component.sass']
})
export class MitraComponent implements OnInit {

  countSo = 0
  
  constructor(
    private userApi:UserApi,
    private mitraApi:MitraApi,
    private soApi:MitraShippingOrderApi
  ) {
    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe((mitra:Mitra) => {
      this.soApi.count({mitraId: mitra.id}).subscribe(({count}) => {
        this.countSo = count
      })
    })
  }

  ngOnInit() {
  }

}
