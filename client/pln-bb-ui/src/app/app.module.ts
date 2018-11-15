import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitraModule } from './mitra/mitra.module';
import { SharedModule } from './shared/shared.module';

import { FormKesanggupanComponent } from './mitra/form-kesanggupan/form-kesanggupan.component';
import { DaftarKesanggupanComponent } from './mitra/daftar-kesanggupan/daftar-kesanggupan.component';
import { CoalSourceComponent } from './mitra/coal-source/coal-source.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'rencana-pasokan', component: FormKesanggupanComponent },
  { path: 'realisasi-pengiriman', component: DaftarKesanggupanComponent },

  { path: 'coal-source/:id', component: CoalSourceComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    MitraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
