import { Component, OnInit } from '@angular/core';
import { ShippingInstructionApi } from '../../../shared/sdk/services/custom/ShippingInstruction';
import { MitraShippingOrderApi } from '../../../shared/sdk';

@Component({
  selector: 'app-dirop-shipping-instruction-browse',
  templateUrl: './dirop-shipping-instruction-browse.component.html',
  styleUrls: ['./dirop-shipping-instruction-browse.component.sass']
})
export class DiropShippingInstructionBrowseComponent implements OnInit {

  daftarSi

  constructor(
    private siApi:ShippingInstructionApi,
    private soApi:MitraShippingOrderApi
  ) { 
    this.siApi.find({include: ['transport', 'jetty', 'siRequest']}).subscribe((data:any) => {
      //console.log(data)

      let soIds = data.map((entry:any) => entry.siRequest.shippingOrderId)

      this.soApi.find({where: {id: {inq: soIds}}, include: ['mitra', {'mitraKesanggupan': ['jetty', 'referensiKontrak', 'tujuanPltu']}, {'rencanaPasokan': 'rencana'}]}).subscribe((dataSo:any) => {
        //console.log(dataSo)

        for(let i=0; i<data.length; i++) {
          for(let j=0; j<dataSo.length; j++) {
            if(data[i].siRequest.shippingOrderId === dataSo[j].id)
              data[i].siRequest.shippingOrder = dataSo[j]
          }
        }

        //console.log(data)
        this.daftarSi = data
      })
    })
  }

  ngOnInit() {
  }

}
