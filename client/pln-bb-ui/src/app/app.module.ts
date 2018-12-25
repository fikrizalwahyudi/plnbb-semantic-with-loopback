import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { StorageServiceModule} from 'angular-webstorage-service';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { GlobalService } from './shared/services/global.service';
import { PltuService } from './shared/services/pltu.service';
import { RencanaPasokanService } from './shared/services/rencana_pasokan.service';

import { LoginComponent } from './login/login.component';
import { SDKBrowserModule } from './shared/sdk/index';
import { RolesService } from './shared/services/roles.service';
import { UsersService } from './shared/services/users.service';
import { UserMitraService } from './shared/services/user_mitra.service';
import { ReferensiKontrakService } from './shared/services/referensi_kontrak.service';
import { MitraService } from './shared/services/mitra.service';
import {NgxMaskModule} from 'ngx-mask'

import localeId from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeId)

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthenticatedGuard], data: { breadcrumb: 'Administation' } },

  { path: 'mitra', loadChildren: './mitra/mitra.module#MitraModule', canActivate: [AuthenticatedGuard], data: { breadcrumb: 'Mitra' } },
  
  { path: 'plnbb', loadChildren: './plnbb/plnbb.module#PlnbbModule', canActivate: [AuthenticatedGuard], data: { breadcrumb: 'PLN BB' } },

  { path: 'dirop', loadChildren: './dirop/dirop.module#DiropModule', canActivate: [AuthenticatedGuard], data: { breadcrumb: 'Direktur Operasi' } },

  { path: 'info', loadChildren: './info/info.module#InfoModule', canActivate: [AuthenticatedGuard], data: { breadcrumb: 'Info' } },

  { path: '', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SDKBrowserModule.forRoot(),
    BrowserModule,
    SharedModule,
    StorageServiceModule,
    HttpModule,
    NgxMaskModule.forRoot()
    
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PltuService,
    RencanaPasokanService, 
    RolesService, 
    GlobalService, 
    UsersService, 
    UserMitraService, 
    ReferensiKontrakService, 
    MitraService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
