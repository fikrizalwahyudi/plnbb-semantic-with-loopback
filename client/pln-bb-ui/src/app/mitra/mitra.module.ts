import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MitraKesanggupanPasokanComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan.component';
import { MitraKesanggupanPasokanBrowseComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-browse.component';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-form.component';
import { MitraKesanggupanPasokanCreateComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-create.component';
import { MitraKesanggupanPasokanEditComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-edit.component';
import { MitraComponent } from './mitra.component';
import { MitraKesanggupanTambangComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-tambang/mitra-kesanggupan-tambang.component';
import localeId from '@angular/common/locales/id';
import { MitraShippingOrderComponent } from './mitra-shipping-order/mitra-shipping-order.component';
import { MitraShippingOrderBrowseComponent } from './mitra-shipping-order/mitra-shipping-order-browse/mitra-shipping-order-browse.component';
import { MitraShippingOrderRequestSiComponent } from './mitra-shipping-order/mitra-shipping-order-request-si/mitra-shipping-order-request-si.component';
import { MitraKesanggupanPasokanAvailableComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-available.component';
import { MitraKesanggupanPasokanInprogressComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-inprogress.component';
import { MitraKesanggupanPasokanDelayedComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-delayed.component';
import { MitraKesanggupanPasokanExpiredComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-expired.component';
import { MitraKesanggupanPasokanCompleteComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-browse/mitra-kesanggupan-pasokan-complete.component';
import { MitraShippingLoadingComponent } from './mitra-shipping-loading/mitra-shipping-loading.component';
import { MitraInfoLoadingComponent } from './mitra-info-loading/mitra-info-loading.component';

//registerLocaleData(localeId)

const appRoutes: Routes = [
  {
    path: '', component: MitraComponent, children: [
      { path: '', redirectTo: 'kesanggupan-pasokan', pathMatch: 'full' },
      { path: 'home', component: MitraKesanggupanPasokanComponent, data: { breadcrumb: 'Home' } },
      { path: 'kesanggupan-pasokan', component: MitraKesanggupanPasokanComponent, data: { breadcrumb: 'Pengiriman' }, children: [
        { path: '', redirectTo: 'browse', pathMatch: 'full' },
        { path: 'browse', component: MitraKesanggupanPasokanBrowseComponent, data: { breadcrumb: 'Catalog' }, children: [
          { path: '', redirectTo: 'available', pathMatch: 'full' },
          { path: 'available', component: MitraKesanggupanPasokanAvailableComponent, data: { breadcrumb: 'Available' } },
          { path: 'inprogress', component: MitraKesanggupanPasokanInprogressComponent, data: { breadcrumb: 'In Progress' } },
          { path: 'delayed', component: MitraKesanggupanPasokanDelayedComponent, data: { breadcrumb: 'Delayed' } },
          { path: 'complete', component: MitraKesanggupanPasokanCompleteComponent, data: { breadcrumb: 'Complete' } },
          { path: 'expired', component: MitraKesanggupanPasokanExpiredComponent, data: { breadcrumb: 'Expired' } }
        ] },
        { path: 'create', component: MitraKesanggupanPasokanCreateComponent, data: { breadcrumb: 'Create' } },
        { path: ':id/edit', component: MitraKesanggupanPasokanEditComponent, data: { breadcrumb: 'Edit' } },
        { path: ':id/loading', component: MitraShippingLoadingComponent, data: { breadcrumb: 'Loading' } },
        { path: 'info/:id/loading', component: MitraInfoLoadingComponent, data: { breadcrumb: 'Info Loading' } }
      ] },

      { path: 'shipping-order', component: MitraShippingOrderComponent, data: { breadcrumb: 'Shipping Order' }, children: [
        { path: '', redirectTo: 'browse', pathMatch: 'full' },
        { path: 'browse', component: MitraShippingOrderBrowseComponent, data: { breadcrumb: 'Browse' } },
        { path: ':id/request-si', component: MitraShippingOrderRequestSiComponent, data: { breadcrumb: 'Request SI' } }
      ] },
      
      { path: 'kesanggupan-tambang/:id', component: MitraKesanggupanTambangComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MitraComponent,
    MitraKesanggupanPasokanComponent,
    MitraKesanggupanTambangComponent,
    MitraKesanggupanPasokanBrowseComponent,
    MitraKesanggupanPasokanFormComponent,
    MitraKesanggupanPasokanCreateComponent,
    MitraKesanggupanPasokanEditComponent,
    MitraShippingOrderComponent,
    MitraShippingOrderBrowseComponent,
    MitraShippingOrderRequestSiComponent,
    MitraKesanggupanPasokanAvailableComponent,
    MitraKesanggupanPasokanInprogressComponent,
    MitraKesanggupanPasokanDelayedComponent,
    MitraKesanggupanPasokanExpiredComponent,
    MitraKesanggupanPasokanCompleteComponent,
    MitraShippingLoadingComponent,
    MitraInfoLoadingComponent
  ],
  exports: [
    MitraComponent,
    MitraKesanggupanPasokanComponent,
    MitraKesanggupanTambangComponent,
    MitraKesanggupanPasokanBrowseComponent,
    MitraKesanggupanPasokanFormComponent,
    MitraKesanggupanPasokanCreateComponent,
    MitraKesanggupanPasokanEditComponent,
    MitraShippingOrderComponent,
    MitraShippingOrderBrowseComponent,
    MitraShippingOrderRequestSiComponent,
    MitraKesanggupanPasokanAvailableComponent,
    MitraKesanggupanPasokanInprogressComponent,
    MitraKesanggupanPasokanDelayedComponent,
    MitraKesanggupanPasokanExpiredComponent,
    MitraKesanggupanPasokanCompleteComponent,
    MitraShippingLoadingComponent,
    MitraInfoLoadingComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id'}
  ]
})
export class MitraModule { }
