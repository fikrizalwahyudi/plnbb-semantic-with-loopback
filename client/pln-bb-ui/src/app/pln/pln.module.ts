import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormKebutuhanComponent } from './form-kebutuhan/form-kebutuhan.component';
import { FormKebutuhanKesanggupanComponent } from './form-kebutuhan-kesanggupan/form-kebutuhan-kesanggupan.component';
import { DaftarKebutuhanComponent } from './daftar-kebutuhan/daftar-kebutuhan.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RealisasiLoadingComponent } from './realisasi-loading/realisasi-loading.component';
import { RealisasiUnloadingComponent } from './realisasi-unloading/realisasi-unloading.component';
import { RealisasiShippingComponent } from './realisasi-shipping/realisasi-shipping.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [FormKebutuhanComponent, FormKebutuhanKesanggupanComponent, DaftarKebutuhanComponent, RealisasiLoadingComponent, RealisasiUnloadingComponent, RealisasiShippingComponent]
}) 
export class PlnModule { }
