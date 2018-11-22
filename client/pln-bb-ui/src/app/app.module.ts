import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { StorageServiceModule} from 'angular-webstorage-service';
import { MitraModule } from './mitra/mitra.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { PltuService } from './shared/services/pltu.service';
import { RencanaPasokanService } from './shared/services/rencana_pasokan.service';

import { FormKesanggupanComponent } from './mitra/form-kesanggupan/form-kesanggupan.component';
import { DaftarKesanggupanComponent } from './mitra/daftar-kesanggupan/daftar-kesanggupan.component';
import { CoalSourceComponent } from './mitra/coal-source/coal-source.component';
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
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule' },
  { path: 'rencana-pasokan', component: FormKesanggupanComponent, canActivate: [AuthenticatedGuard] },
  { path: 'realisasi-pengiriman', component: DaftarKesanggupanComponent, canActivate: [AuthenticatedGuard] },
  { path: 'coal-source/:id', component: CoalSourceComponent, canActivate: [AuthenticatedGuard] },
  { path: 'realisasi-info/:id', component: FormKebutuhanKesanggupanComponent, canActivate: [AuthenticatedGuard] },
  { path: 'realisasi-loading/:id', component: RealisasiLoadingComponent, canActivate: [AuthenticatedGuard] },
  { path: 'realisasi-sailing/:id', component: RealisasiShippingComponent, canActivate: [AuthenticatedGuard] },
  { path: 'realisasi-unloading/:id', component: RealisasiUnloadingComponent, canActivate: [AuthenticatedGuard] },

  { path: 'request-si/:id', component: SiComponent, canActivate: [AuthenticatedGuard] },

  { path: 'pln-rencana-pasokan', component: FormKebutuhanComponent, canActivate: [AuthenticatedGuard] },
  { path: 'pln-realisasi-pengiriman', component: DaftarKebutuhanComponent, canActivate: [AuthenticatedGuard] },

  { path: 'pln-realisasi-info/:id', component: FormKebutuhanKesanggupanComponent, canActivate: [AuthenticatedGuard] },
  { path: 'pln-realisasi-loading/:id', component: RealisasiLoadingComponent, canActivate: [AuthenticatedGuard] },
  { path: 'pln-realisasi-sailing/:id', component: RealisasiShippingComponent, canActivate: [AuthenticatedGuard] },
  { path: 'pln-realisasi-unloading/:id', component: RealisasiUnloadingComponent, canActivate: [AuthenticatedGuard] },

  { path: 'pln-approve-si/:id', component: SiComponent, canActivate: [AuthenticatedGuard] },
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
    StorageServiceModule,
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [PltuService,RencanaPasokanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
