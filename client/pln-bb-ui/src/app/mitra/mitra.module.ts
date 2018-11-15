import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormKesanggupanComponent } from './form-kesanggupan/form-kesanggupan.component';
import { DaftarKesanggupanComponent } from './daftar-kesanggupan/daftar-kesanggupan.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiComponent } from './si/si.component';
import { CoalSourceComponent } from './coal-source/coal-source.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [FormKesanggupanComponent, DaftarKesanggupanComponent, SiComponent, CoalSourceComponent]
})
export class MitraModule { }
