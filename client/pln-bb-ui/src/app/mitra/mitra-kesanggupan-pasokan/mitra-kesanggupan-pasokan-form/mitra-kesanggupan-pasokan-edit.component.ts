import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan-form.component';
import { PltuApi } from '../../../shared/sdk/services/custom/Pltu';
import { Router, ActivatedRoute } from '@angular/router';
import { MitraKesanggupan, MitraKesanggupanApi, MitraApi, UserApi, ReferensiKontrakApi, ReferensiKontrakPltuApi,ReferensiKontrakTambangApi,MitraKesanggupanTambangApi } from '../../../shared/sdk';

@Component({
  selector: 'mitra-kesanggupan-pasokan-edit',
  template: `
    <mitra-kesanggupan-pasokan-form (init)="init($event)" (save)="save($event)"></mitra-kesanggupan-pasokan-form>
  `,
  styles: []
})
export class MitraKesanggupanPasokanEditComponent implements OnInit {

  @ViewChild(MitraKesanggupanPasokanFormComponent)
  formComponent: MitraKesanggupanPasokanFormComponent

  mitraKesanggupan:MitraKesanggupan

  constructor(
    private mitraApi: MitraApi,
    private userApi:UserApi,
    private kontrakApi:ReferensiKontrakApi,
    private kontrakPltuApi:ReferensiKontrakPltuApi,
    private kontrakTambangApi:ReferensiKontrakTambangApi,
    private kesanggupanApi:MitraKesanggupanApi,
    private tambangApi:MitraKesanggupanTambangApi,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.kesanggupanApi.findById(id, {include: ['tujuanPltu', 'referensiKontrak', 'jetty', 'sumberTambang'] }).subscribe(data => {
        this.mitraKesanggupan = data as MitraKesanggupan
        console.log(this.mitraKesanggupan);

        fg.patchValue(this.mitraKesanggupan)
        if(this.mitraKesanggupan.referensiKontrak){
          setTimeout(() => {
            fg.patchValue({referensiKontrakId: {
              name: this.mitraKesanggupan.referensiKontrak.nomorKontrak,
              value: this.mitraKesanggupan.referensiKontrak.id,
              text: this.mitraKesanggupan.referensiKontrak.nomorKontrak
            }})
            console.log("kepanggil");
          }, 10)
          
        }
        
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    this.kesanggupanApi.patchAttributes(this.mitraKesanggupan.id, model).subscribe(data => {
      this.router.navigate(['/admin', 'pltu'])
      this.formComponent.submitting = false
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
