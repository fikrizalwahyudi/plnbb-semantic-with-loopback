import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
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
    private kesanggupanApi:MitraKesanggupanApi
  ) { }

  ngOnInit() {

  }

  save(model) {
    console.log(model);

    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let sumberTambang = model.sumberTambang

    //console.log('tambang', sumberTambang);
    model.userId = this.userApi.getCurrentId()
    model.referensiKontrakId = model.referensiKontrakId.value

    if(model.jenisKontrak != 'cif'){
      model.jettyId = null;
    }

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
