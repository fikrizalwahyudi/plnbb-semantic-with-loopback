import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MitraKesanggupanPasokanComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan.component';
import { MitraKesanggupanPasokanFormComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-form.component';
import { MitraKesanggupanPasokanCreateComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-create.component';
import { MitraKesanggupanPasokanEditComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-pasokan-form/mitra-kesanggupan-pasokan-edit.component';
import { MitraComponent } from './mitra.component';
import { HomeComponent } from '../admin/home/home.component';
import { MitraKesanggupanTambangComponent } from './mitra-kesanggupan-pasokan/mitra-kesanggupan-tambang/mitra-kesanggupan-tambang.component';
const appRoutes: Routes = [
  {
    path: 'mitra', component: MitraComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'kesanggupan-pasokan', component: MitraKesanggupanPasokanComponent, children: [
        { path: '', redirectTo: 'kesanggupan-pasokan', pathMatch: 'full' },
        { path: 'create', component: MitraKesanggupanPasokanCreateComponent },
        { path: ':id/edit', component: MitraKesanggupanPasokanEditComponent }
      ]},
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
    MitraKesanggupanPasokanComponent,
    MitraKesanggupanTambangComponent,
    MitraKesanggupanPasokanFormComponent,
    MitraKesanggupanPasokanCreateComponent,
    MitraKesanggupanPasokanEditComponent
  ],
  exports: [
    MitraKesanggupanPasokanComponent,
    MitraKesanggupanTambangComponent,
    MitraKesanggupanPasokanFormComponent,
    MitraKesanggupanPasokanCreateComponent,
    MitraKesanggupanPasokanEditComponent
  ]
})
export class MitraModule { }
