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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'rencana-pasokan', component: FormKesanggupanComponent },
  { path: 'realisasi-pengiriman', component: DaftarKesanggupanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule' },
  { path: 'coal-source/:id', component: CoalSourceComponent }
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
    StorageServiceModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
