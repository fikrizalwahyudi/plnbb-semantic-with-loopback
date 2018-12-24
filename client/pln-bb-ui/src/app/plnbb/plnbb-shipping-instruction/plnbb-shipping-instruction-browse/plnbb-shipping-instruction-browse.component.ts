import { Component, OnInit } from '@angular/core';
import { MitraShippingInstructionRequestApi } from '../../../shared/sdk/services/custom/MitraShippingInstructionRequest';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-plnbb-shipping-instruction-browse',
  templateUrl: './plnbb-shipping-instruction-browse.component.html',
  styleUrls: ['./plnbb-shipping-instruction-browse.component.sass']
})
export class PlnbbShippingInstructionBrowseComponent implements OnInit {

  si

  constructor(
    private siRequestApi:MitraShippingInstructionRequestApi
  ) { 
    this.siRequestApi.find({include: [{'shippingOrder': {'mitraKesanggupan': ['jetty', 'mitra', 'referensiKontrak', 'tujuanPltu']}}, 'shippingInstruction']}).subscribe(data => {
      //console.log(data)
      this.si = data
    })
  }

  ngOnInit() {
  }

  download(item) {
    window.open(`${environment.apiUrl}/pdf/si/${item.id}/download`)
  } 

}
