import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { Routes, RouterModule } from '@angular/router';
import { InfoLoadingComponent } from './info-loading/info-loading.component';
import { InfoUnloadingComponent } from './info-unloading/info-unloading.component';
import { InfoShippingComponent } from './info-shipping/info-shipping.component';
import { SharedModule } from '../shared/shared.module';

const appRoutes: Routes = [
  { path: '', component: InfoComponent, children: [
    { path: 'loading', component: InfoLoadingComponent, data: { breadcrumb: 'Loading' } },
    { path: 'unloading', component: InfoUnloadingComponent, data: { breadcrumb: 'Unloading' } },
    { path: 'shipping', component: InfoShippingComponent, data: { breadcrumb: 'Shipping' } }
  ] }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [InfoComponent, InfoLoadingComponent, InfoUnloadingComponent, InfoShippingComponent],
  exports: [InfoComponent, InfoLoadingComponent, InfoUnloadingComponent, InfoShippingComponent]
})
export class InfoModule { }
