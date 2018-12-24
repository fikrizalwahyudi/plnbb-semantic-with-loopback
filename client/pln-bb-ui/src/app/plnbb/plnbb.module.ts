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
import { PlnbbShippingInstructionFormComponent } from './plnbb-shipping-instruction/plnbb-shipping-instruction-form/plnbb-shipping-instruction-form.component'
import { NgxMaskModule } from 'ngx-mask';

const appRoutes: Routes = [
  { path: '', component: PlnbbComponent, children: [
    { path: '', redirectTo: 'rencana-pasokan', pathMatch: 'full' },
    
    { path: 'rencana-pasokan', component: PlnBBRencanaPasokanBrowseComponent, data: { breadcrumb: 'Rakor Pengiriman' } },
    
    { path: 'shipping-instruction', component: PlnbbShippingInstructionComponent, data: { breadcrumb: 'Shipping Instruction' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: PlnbbShippingInstructionBrowseComponent, data: { breadcrumb: 'Request' } },
      { path: ':id/grant', component: PlnbbShippingInstructionFormComponent, data: { breadcrumb: 'Grant' } }
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
    PlnbbShippingInstructionFormComponent
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
    PlnbbShippingInstructionFormComponent
  ]
})
export class PlnbbModule { }
