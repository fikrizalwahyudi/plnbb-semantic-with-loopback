import { Component, OnInit } from '@angular/core';
import { MitraShippingInstructionRequestApi } from '../shared/sdk/services/custom/MitraShippingInstructionRequest';
import { ShippingLoadingApi } from '../shared/sdk/services/custom/ShippingLoading';

declare var $: any;
@Component({
  selector: 'app-plnbb',
  templateUrl: './plnbb.component.html',
  styleUrls: ['./plnbb.component.sass']
})
export class PlnbbComponent implements OnInit {
  
  countSi = 0
  countLoading = 0

  constructor(
    private siRequestApi:MitraShippingInstructionRequestApi,
    private loadingApi:ShippingLoadingApi
  ) {
    this.siRequestApi.count().subscribe(({count}) => {
      this.countSi = count
    })

    this.loadingApi.count({status: 1}).subscribe(({count}) => {
      this.countLoading = count
    })
  }

  ngOnInit() {
  }

}
