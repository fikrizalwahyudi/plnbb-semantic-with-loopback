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

registerLocaleData(localeId)

const appRoutes: Routes = [
  {
    path: 'mitra', component: MitraComponent, data: { breadcrumb: 'Mitra' }, children: [
      { path: '', redirectTo: 'kesanggupan-pasokan', pathMatch: 'full' },
      { path: 'home', component: MitraKesanggupanPasokanComponent, data: { breadcrumb: 'Home' } },
      { path: 'kesanggupan-pasokan', component: MitraKesanggupanPasokanComponent, data: { breadcrumb: 'Pasokan' }, children: [
        { path: '', redirectTo: 'browse', pathMatch: 'full' },
        { path: 'browse', component: MitraKesanggupanPasokanBrowseComponent, data: { breadcrumb: 'Catalog' } },
        { path: 'create', component: MitraKesanggupanPasokanCreateComponent, data: { breadcrumb: 'Create' } },
        { path: ':id/edit', component: MitraKesanggupanPasokanEditComponent, data: { breadcrumb: 'Edit' } }
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
    MitraShippingOrderRequestSiComponent
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
    MitraShippingOrderRequestSiComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id'}
  ]
})
export class MitraModule { }
