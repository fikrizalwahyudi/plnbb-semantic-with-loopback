import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StorageServiceModule} from 'angular-webstorage-service';
import { MitraModule } from './mitra/mitra.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { FormKesanggupanComponent } from './mitra/form-kesanggupan/form-kesanggupan.component';
import { DaftarKesanggupanComponent } from './mitra/daftar-kesanggupan/daftar-kesanggupan.component';
import { CoalSourceComponent } from './mitra/coal-source/coal-source.component';
import { HeaderComponent } from './shared/ui/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { PlnModule } from './pln/pln.module';
import { DaftarKebutuhanComponent } from './pln/daftar-kebutuhan/daftar-kebutuhan.component';
import { FormKebutuhanComponent } from './pln/form-kebutuhan/form-kebutuhan.component';
import { FormKebutuhanKesanggupanComponent } from './pln/form-kebutuhan-kesanggupan/form-kebutuhan-kesanggupan.component';
import { RealisasiLoadingComponent } from './pln/realisasi-loading/realisasi-loading.component';
import { RealisasiUnloadingComponent } from './pln/realisasi-unloading/realisasi-unloading.component';
import { SiComponent } from './mitra/si/si.component';
import { RealisasiShippingComponent } from './pln/realisasi-shipping/realisasi-shipping.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rencana-pasokan', component: FormKesanggupanComponent },
  { path: 'realisasi-pengiriman', component: DaftarKesanggupanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule' },
  { path: 'coal-source/:id', component: CoalSourceComponent },
  { path: 'realisasi-info/:id', component: FormKebutuhanKesanggupanComponent },
  { path: 'realisasi-loading/:id', component: RealisasiLoadingComponent },
  { path: 'realisasi-sailing/:id', component: RealisasiShippingComponent },
  { path: 'realisasi-unloading/:id', component: RealisasiUnloadingComponent },

  { path: 'request-si/:id', component: SiComponent },

  { path: 'pln-rencana-pasokan', component: FormKebutuhanComponent },
  { path: 'pln-realisasi-pengiriman', component: DaftarKebutuhanComponent },

  { path: 'pln-realisasi-info/:id', component: FormKebutuhanKesanggupanComponent },
  { path: 'pln-realisasi-loading/:id', component: RealisasiLoadingComponent },
  { path: 'pln-realisasi-sailing/:id', component: RealisasiShippingComponent },
  { path: 'pln-realisasi-unloading/:id', component: RealisasiUnloadingComponent },

  { path: 'pln-approve-si/:id', component: SiComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
    // AdminModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AdminModule,
    SharedModule,
    MitraModule,
    PlnModule,
    StorageServiceModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
