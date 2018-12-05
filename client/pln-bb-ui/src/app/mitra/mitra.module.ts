import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MitraKesanggupanPasokanComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan.component';
import { MitraComponent } from './mitra.component';
import { HomeComponent } from '../admin/home/home.component';
const appRoutes: Routes = [
  {
    path: 'mitra', component: MitraComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'kesanggupan-pasokan', component: MitraKesanggupanPasokanComponent },

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
    MitraKesanggupanPasokanComponent,
  ],
  exports: [
    MitraKesanggupanPasokanComponent,
  ]
})
export class MitraModule { }
