import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MasterReferensiKontrakFormComponent } from './master-referensi-kontrak-form.component';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { Router, ActivatedRoute } from '@angular/router';
import { ReferensiKontrak, ReferensiKontrakPltuApi, ReferensiKontrakTambangApi } from '../../../shared/sdk';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'master-referensi-kontrak-edit',
  template: `
    <master-referensi-kontrak-form (init)="init($event)" (save)="save($event)"></master-referensi-kontrak-form>
  `,
  styles: []
})
export class MasterReferensiKontrakEditComponent implements OnInit {

  @ViewChild(MasterReferensiKontrakFormComponent)
  formComponent: MasterReferensiKontrakFormComponent

  referensiKontrak:ReferensiKontrak

  constructor(
    private referensiKontrakApi: ReferensiKontrakApi,
    private referensiKontrakPltuApi: ReferensiKontrakPltuApi,
    private referensiKontrakTambangApi: ReferensiKontrakTambangApi,
    private router:Router,
    private route:ActivatedRoute,
    private http:HttpClient
  ) { 
    
  }

  ngOnInit() {
  }

  init(fg:FormGroup) {
    this.route.params.subscribe(params => {
      let id = params['id']

      this.referensiKontrakApi.findById(id, {include: ['mitra', 'pltuPrincipals', 'tambangPrincipals']}).subscribe(data => {
        this.referensiKontrak = data as ReferensiKontrak
        
        //console.log(this.referensiKontrak)
        
        fg.patchValue(this.referensiKontrak)
        if(this.referensiKontrak.mitra)
          fg.patchValue({mitra: {
            name: this.referensiKontrak.mitra.name,
            value: this.referensiKontrak.mitra.id,
            text: this.referensiKontrak.mitra.name
          }})

        if(this.referensiKontrak.pltuPrincipals.length > 0) {
          setTimeout(() => {
            fg.patchValue({pltu: this.referensiKontrak.pltuPrincipals.map(entry => entry.pltuId)})
          }, 10)
        }

        if(this.referensiKontrak.tambangPrincipals.length > 0) {
          setTimeout(() => {
            fg.patchValue({tambang: this.referensiKontrak.tambangPrincipals.map(entry => entry.tambangId)})
          }, 10)
        }
      })
    })
  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let pltu = model.pltu.map(entry => {
      return {
        referensiKontrakId: this.referensiKontrak.id,
        pltuId: entry
      }
    })

    let tambang = model.tambang.map(entry => {
      return {
        referensiKontrakId: this.referensiKontrak.id,
        tambangId: entry
      }
    })

    delete model['pltu']
    delete model['tambang']

    this.referensiKontrakApi.patchAttributes(this.referensiKontrak.id, model).subscribe(data => {
      this.referensiKontrakApi.patchPltu(this.referensiKontrak.id, pltu).subscribe(data => {
        this.referensiKontrakApi.patchTambang(this.referensiKontrak.id, tambang).subscribe(data => {
          this.router.navigate(['/admin', 'referensi-kontrak'])
          this.formComponent.submitting = false
        })
      })
    }, err => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
