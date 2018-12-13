import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { ReferensiKontrakPltuApi } from '../../../shared/sdk/services/custom/ReferensiKontrakPltu';
import { MitraKesanggupanApi } from '../../../shared/sdk/services/custom/MitraKesanggupan';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan-form.component';

@Component({
  selector: 'mitra-kesanggupan-pasokan-create',
  template: `
    <mitra-kesanggupan-pasokan-form (save)="save($event)"></mitra-kesanggupan-pasokan-form>
  `,
  styles: []
})
export class MitraKesanggupanPasokanCreateComponent implements OnInit {

  @ViewChild(MitraKesanggupanPasokanFormComponent)
  formComponent: MitraKesanggupanPasokanFormComponent
  
  constructor(
    private router:Router,
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kontrakApi:ReferensiKontrakApi,
    private kontrakPltuApi:ReferensiKontrakPltuApi,
    private kesanggupanApi:MitraKesanggupanApi
  ) { }

  ngOnInit() {

  }

  save(model) {
    console.log(model);

    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let tambang = model.daftarTambang

    if(!model.jettyId){
      delete model['jettyId']
    }

    console.log('tambang', tambang);

    model.userId = this.userApi.getCurrentId()
    this.kesanggupanApi.create(model).subscribe((kesanggupan:any) => {

      tambang = tambang.map(entry => {
        return {
          referensiKontrakId: kesanggupan.id,
          tambangId: entry.tambangId,
          jumlah:entry.jumlahPasokanTambang
        }
      })

      this.kesanggupanApi.patchTambang(kesanggupan.id, tambang).subscribe(data => {
        this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
        this.formComponent.submitting = false
      })
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
