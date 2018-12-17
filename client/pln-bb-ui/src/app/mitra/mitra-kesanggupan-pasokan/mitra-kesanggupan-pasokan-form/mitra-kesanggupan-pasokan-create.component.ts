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

    let sumberTambang = model.daftarTambang
    delete model['daftarTambang']

    if(model.jetty){
      model.jettyId = model.jetty.value
      delete model['jetty']
    }else{
      delete model['jetty']
    }

    //console.log('tambang', sumberTambang);

    model.userId = this.userApi.getCurrentId()
    model.tipe = model.jenisKontrak
    model.jenis = model.jenisBatubara

    delete model['jenisKontrak']
    delete model['jenisBatubara']

    this.mitraApi.findOne({where: {userId: this.userApi.getCurrentId()}}).subscribe((mitra:any) => {
      model.mitraId = mitra.id
      
      this.kesanggupanApi.create(model).subscribe((kesanggupan:any) => {

        sumberTambang = sumberTambang.map(entry => {
          return {
            mitraKesanggupanId: kesanggupan.id,
            tambangId: entry.tambangId,
            jumlah:entry.jumlahPasokanTambang
          }
        })
  
        this.kesanggupanApi.patchTambang(kesanggupan.id, sumberTambang).subscribe(data => {
          this.router.navigate(['/mitra', 'kesanggupan-pasokan'])
          this.formComponent.submitting = false
        })
      }, (err) => {
        this.formComponent.errorMsg = err.message
        this.formComponent.submitting = false
      })
    })
  }

}
