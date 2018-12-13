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

registerLocaleData(localeId)

const appRoutes: Routes = [
  {
    path: 'mitra', component: MitraComponent, children: [
      { path: '', redirectTo: 'kesanggupan-pasokan', pathMatch: 'full' },
      { path: 'home', component: MitraKesanggupanPasokanComponent },
      { path: 'kesanggupan-pasokan', component: MitraKesanggupanPasokanComponent, children: [
        { path: '', redirectTo: 'browse', pathMatch: 'full' },
        { path: 'browse', component: MitraKesanggupanPasokanBrowseComponent },
        { path: 'create', component: MitraKesanggupanPasokanCreateComponent },
        { path: ':id/edit', component: MitraKesanggupanPasokanEditComponent }
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
    MitraKesanggupanPasokanEditComponent
  ],
  exports: [
    MitraComponent,
    MitraKesanggupanPasokanComponent,
    MitraKesanggupanTambangComponent,
    MitraKesanggupanPasokanBrowseComponent,
    MitraKesanggupanPasokanFormComponent,
    MitraKesanggupanPasokanCreateComponent,
    MitraKesanggupanPasokanEditComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id'}
  ]
})
export class MitraModule { }
