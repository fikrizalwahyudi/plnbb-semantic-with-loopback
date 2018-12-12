import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ReferensiKontrakApi } from '../../../shared/sdk/services/custom/ReferensiKontrak';
import { MasterReferensiKontrakFormComponent } from './master-referensi-kontrak-form.component';

@Component({
  selector: 'master-referensi-kontrak-create',
  template: `
    <master-referensi-kontrak-form (save)="save($event)"></master-referensi-kontrak-form>
  `,
  styles: []
})
export class MasterReferensiKontrakCreateComponent implements OnInit {

  @ViewChild(MasterReferensiKontrakFormComponent)
  formComponent: MasterReferensiKontrakFormComponent

  constructor(
    private referensiKontrakApi: ReferensiKontrakApi,
    private router:Router
  ) { }

  ngOnInit() {

  }

  save(model) {
    this.formComponent.submitting = true
    this.formComponent.errorMsg = undefined

    let pltu = model.pltu
    let tambang = model.tambang

    delete model['pltu']
    delete model['tambang']

    this.referensiKontrakApi.create(model).subscribe((referensiKontrak:any) => {
      pltu = pltu.map(entry => {
        return {
          referensiKontrakId: referensiKontrak.id,
          pltuId: entry
        }
      })
  
      tambang = tambang.map(entry => {
        return {
          referensiKontrakId: referensiKontrak.id,
          tambangId: entry
        }
      })

      this.referensiKontrakApi.patchPltu(referensiKontrak.id, pltu).subscribe(data => {
        this.referensiKontrakApi.patchTambang(referensiKontrak.id, tambang).subscribe(data => {
          this.router.navigate(['/admin', 'referensi-kontrak'])
          this.formComponent.submitting = false
        })
      })
    }, (err) => {
      this.formComponent.errorMsg = err.message
      this.formComponent.submitting = false
    })
  }

}
