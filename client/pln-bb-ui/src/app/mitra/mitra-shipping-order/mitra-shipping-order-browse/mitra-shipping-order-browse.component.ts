import { Component, OnInit } from '@angular/core';
import { MitraShippingOrderApi } from '../../../shared/sdk/services/custom/MitraShippingOrder';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { MitraShippingInstructionRequestApi } from '../../../shared/sdk/services/custom/MitraShippingInstructionRequest';
import { environment } from '../../../../environments/environment';

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
    private soApi:MitraShippingOrderApi,
    private siRequestApi:MitraShippingInstructionRequestApi
  ) { 
    this.mitraApi.findOne({where:{userId: this.userApi.getCurrentId()}}).subscribe((mitra:any) => {
      this.soApi.find({where: {mitraId: mitra.id}, include: [{'mitraKesanggupan': ['jetty', 'tujuanPltu']}, 'rencanaPasokan']}).subscribe((data:any) => {
        //console.log(data)

        this.siRequestApi.find({where: {shippingOrderId: {inq: data.map(e => e.id)}}, include: ['shippingInstruction']}).subscribe((dataSiRequest:any) => {
          //console.log(dataSiRequest)
          for(let i=0; i<data.length; i++) {
            for(let j=0; j<dataSiRequest.length; j++) {
              if(data[i].id === dataSiRequest[j].shippingOrderId) {
                data[i].siRequest = dataSiRequest[j]
                break
              }
            }
          }

          this.so = data

          console.log(data)
        })
      })
    })
  }

  ngOnInit() {
  }

  download(item) {
    window.open(`${environment.apiUrl}/pdf/si/${item.id}/download`)
  }
}
