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
    this.siApi.find({where: {status: 1}, include: ['transport', 'jetty', {'siRequest': {'shippingOrder': ['mitra', {'mitraKesanggupan': ['jetty', 'referensiKontrak', 'tujuanPltu']}, {'rencanaPasokan': 'rencana'}]}}]}).subscribe((data:any) => {
      this.daftarSi = data
    })
  }

  ngOnInit() {
  }

}
