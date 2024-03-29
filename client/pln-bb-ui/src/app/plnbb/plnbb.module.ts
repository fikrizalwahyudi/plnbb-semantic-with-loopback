import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlnBBRencanaPasokanBrowseComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-browse/plnbb-rencana-pasokan-browse.component';
import { PlnbbComponent } from './plnbb.component';
import { PlnBBRealisasiPengirimanBrowseComponent } from './plnbb-realisasi-pengiriman/plnbb-realisasi-pengiriman-browse/plnbb-realisasi-pengiriman-browse.component';
import { PlnbbRencanaPasokanModalComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-browse/plnbb-rencana-pasokan-modal.component'
import { PlnbbRencanaPasokanSiComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-si/plnbb-rencana-pasokan-si.component';
import { PlnbbRencanaPasokanSiCreateComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-si/plnbb-rencana-pasokan-si-create.component';
import { PlnbbShippingInstructionComponent } from './plnbb-shipping-instruction/plnbb-shipping-instruction.component';
import { PlnbbShippingInstructionBrowseComponent } from './plnbb-shipping-instruction/plnbb-shipping-instruction-browse/plnbb-shipping-instruction-browse.component';
import { PlnbbShippingInstructionFormComponent } from './plnbb-shipping-instruction/plnbb-shipping-instruction-form/plnbb-shipping-instruction-form.component';
import { PlnbbMonitoringPengirimanComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman.component';
import { PlnbbMonitoringPengirimanBrowseComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman-browse/plnbb-monitoring-pengiriman-browse.component';
import { PlnbbMonitoringPengirimanInprogressComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman-browse/plnbb-monitoring-pengiriman-inprogress.component';
import { PlnbbMonitoringPengirimanDelayedComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman-browse/plnbb-monitoring-pengiriman-delayed.component';
import { PlnbbMonitoringPengirimanCompleteComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman-browse/plnbb-monitoring-pengiriman-complete.component';
import { PlnbbMonitoringPengirimanExpiredComponent } from './plnbb-monitoring-pengiriman/plnbb-monitoring-pengiriman-browse/plnbb-monitoring-pengiriman-expired.component';
import { PlnbbShippingUnloadingComponent } from './plnbb-shipping-unloading/plnbb-shipping-unloading.component';
import { NgxMaskModule } from 'ngx-mask';
import { PlnbbVerifikasiLoadingComponent } from './plnbb-verifikasi-loading/plnbb-verifikasi-loading.component';
import { PlnbbVerifikasiSailingComponent } from './plnbb-verifikasi-sailing/plnbb-verifikasi-sailing.component';
import { PlnbbVerifikasiSailingBrowseComponent } from './plnbb-verifikasi-sailing/plnbb-verifikasi-sailing-browse/plnbb-verifikasi-sailing-browse.component';
import { PlnbbVerifikasiSailingFormComponent } from './plnbb-verifikasi-sailing/plnbb-verifikasi-sailing-form/plnbb-verifikasi-sailing-form.component';
import { PlnbbVerifikasiLoadingBrowseComponent } from './plnbb-verifikasi-loading/plnbb-verifikasi-loading-browse/plnbb-verifikasi-loading-browse.component';
import { PlnbbVerifikasiLoadingFormComponent } from './plnbb-verifikasi-loading/plnbb-verifikasi-loading-form/plnbb-verifikasi-loading-form.component';
import { PlnbbInfoLoadingComponent } from './plnbb-info-loading/plnbb-info-loading.component';
import { PlnbbInfoUnloadingComponent } from './plnbb-info-unloading/plnbb-info-unloading.component';

const appRoutes: Routes = [
  { path: '', component: PlnbbComponent, children: [
    { path: '', redirectTo: 'rencana-pasokan', pathMatch: 'full' },
    
    { path: 'rencana-pasokan', component: PlnBBRencanaPasokanBrowseComponent, data: { breadcrumb: 'Rakor Pengiriman' } },
    
    { path: 'shipping-instruction', component: PlnbbShippingInstructionComponent, data: { breadcrumb: 'Shipping Instruction' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: PlnbbShippingInstructionBrowseComponent, data: { breadcrumb: 'Request' } },
      { path: ':id/grant', component: PlnbbShippingInstructionFormComponent, data: { breadcrumb: 'Grant' } }
    ]},

    { path: 'verifikasi-loading', component: PlnbbVerifikasiLoadingComponent, data: { breadcrumb: 'Verifikasi Loading' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: PlnbbVerifikasiLoadingBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: ':id/grant', component: PlnbbVerifikasiLoadingFormComponent, data: { breadcrumb: 'Grant' } }
    ] },

    { path: 'verifikasi-sailing', component: PlnbbVerifikasiSailingComponent, data: { breadcrumb: 'Verifikasi Sailing' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: PlnbbVerifikasiSailingBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: ':id/grant', component: PlnbbVerifikasiSailingFormComponent, data: { breadcrumb: 'Grant' } }
    ] },
    
    { path: 'monitoring-pengiriman', component: PlnbbMonitoringPengirimanComponent, data: { breadcrumb: 'Monitoring Pengiriman' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: PlnbbMonitoringPengirimanBrowseComponent, data: { breadcrumb: 'Catalog'}, children: [
        { path: '', redirectTo: 'inprogress', pathMatch: 'full' },
          { path: 'inprogress', component: PlnbbMonitoringPengirimanInprogressComponent, data: { breadcrumb: 'In Progress' } },
          { path: 'delayed', component: PlnbbMonitoringPengirimanDelayedComponent, data: { breadcrumb: 'Delayed' } },
          { path: 'complete', component: PlnbbMonitoringPengirimanCompleteComponent, data: { breadcrumb: 'Complete' } },
          { path: 'expired', component: PlnbbMonitoringPengirimanExpiredComponent, data: { breadcrumb: 'Expired' } }
      ]},
      { path: ':id/unloading', component: PlnbbShippingUnloadingComponent, data: { breadcrumb: 'Unloading' } }
    ]},

    { path: 'rencana-pasokan-si/:idMitraKesanggupan', component: PlnbbRencanaPasokanSiComponent },
    /*{ path: 'rencana-pasokan-si/create/:idMitraKesanggupan', component: PlnbbRencanaPasokanSiCreateComponent },
    { path: 'realisasi-pengiriman', component: PlnBBRealisasiPengirimanBrowseComponent },*/

  ] }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
    NgxMaskModule.forChild()
  ],
  declarations: [
    PlnbbComponent,
    PlnBBRencanaPasokanBrowseComponent,
    PlnBBRealisasiPengirimanBrowseComponent,
    PlnbbRencanaPasokanModalComponent,
    PlnbbRencanaPasokanSiComponent,
    PlnbbRencanaPasokanSiCreateComponent,
    PlnbbShippingInstructionComponent,
    PlnbbShippingInstructionBrowseComponent,
    PlnbbShippingInstructionFormComponent,
    PlnbbVerifikasiLoadingComponent,
    PlnbbVerifikasiSailingComponent,
    PlnbbVerifikasiSailingBrowseComponent,
    PlnbbVerifikasiSailingFormComponent,
    PlnbbVerifikasiLoadingBrowseComponent,
    PlnbbVerifikasiLoadingFormComponent,
    PlnbbMonitoringPengirimanComponent,
    PlnbbMonitoringPengirimanBrowseComponent,
    PlnbbMonitoringPengirimanInprogressComponent,
    PlnbbMonitoringPengirimanDelayedComponent,
    PlnbbMonitoringPengirimanCompleteComponent,
    PlnbbMonitoringPengirimanExpiredComponent,
    PlnbbShippingUnloadingComponent,
    PlnbbInfoLoadingComponent,
    PlnbbInfoUnloadingComponent
  ],
  exports : [
    PlnbbComponent,
    PlnBBRencanaPasokanBrowseComponent,
    PlnBBRealisasiPengirimanBrowseComponent,
    PlnbbRencanaPasokanModalComponent,
    PlnbbRencanaPasokanSiComponent,
    PlnbbRencanaPasokanSiCreateComponent,
    PlnbbShippingInstructionComponent,
    PlnbbShippingInstructionBrowseComponent,
    PlnbbShippingInstructionFormComponent,
    PlnbbVerifikasiLoadingComponent,
    PlnbbVerifikasiSailingComponent,
    PlnbbVerifikasiSailingBrowseComponent,
    PlnbbVerifikasiSailingFormComponent,
    PlnbbVerifikasiLoadingBrowseComponent,
    PlnbbVerifikasiLoadingFormComponent,
    PlnbbMonitoringPengirimanComponent,
    PlnbbMonitoringPengirimanBrowseComponent,
    PlnbbMonitoringPengirimanInprogressComponent,
    PlnbbMonitoringPengirimanDelayedComponent,
    PlnbbMonitoringPengirimanCompleteComponent,
    PlnbbMonitoringPengirimanExpiredComponent,
    PlnbbShippingUnloadingComponent,
    PlnbbInfoLoadingComponent,
    PlnbbInfoUnloadingComponent
  ]
})
export class PlnbbModule { }
