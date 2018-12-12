import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlnBBRencanaPasokanBrowseComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-browse/plnbb-rencana-pasokan-browse.component';
import { PlnbbComponent } from './plnbb.component';
import { HomeComponent } from '../admin/home/home.component';
import { PlnBBRealisasiPengirimanBrowseComponent } from './plnbb-realisasi-pengiriman/plnbb-realisasi-pengiriman-browse/plnbb-realisasi-pengiriman-browse.component';
import { PlnbbRencanaPasokanSiComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-si/plnbb-rencana-pasokan-si.component';
import { PlnbbRencanaPasokanSiCreateComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan-si/plnbb-rencana-pasokan-si-create.component'
import { MyDateRangePickerModule } from 'mydaterangepicker';

const appRoutes: Routes = [
  { path: 'plnbb', component: PlnbbComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent },
    { path: 'rencana-pasokan', component: PlnBBRencanaPasokanBrowseComponent },
    { path: 'rencana-pasokan-si', component: PlnbbRencanaPasokanSiComponent },
    { path: 'rencana-pasokan-si/:idMitraKesanggupan', component: PlnbbRencanaPasokanSiComponent },
    { path: 'rencana-pasokan-si/create/:idMitraKesanggupan', component: PlnbbRencanaPasokanSiCreateComponent },
    { path: 'realisasi-pengiriman', component: PlnBBRealisasiPengirimanBrowseComponent },

  ] }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes),
    MyDateRangePickerModule

  ],
  declarations: [
    PlnBBRencanaPasokanBrowseComponent,
    PlnBBRealisasiPengirimanBrowseComponent,
    PlnbbRencanaPasokanSiComponent,
    PlnbbRencanaPasokanSiCreateComponent
  ],
  exports : [
    PlnBBRencanaPasokanBrowseComponent,
    PlnBBRealisasiPengirimanBrowseComponent,
    MyDateRangePickerModule
  ]
})
export class PlnbbModule { }
