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
//admin module
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { RolesService } from './shared/services/roles.service';
//mitra module
import { MitraComponent } from './mitra/mitra.component';
import { MitraModule } from './mitra/mitra.module';
import { UsersService } from './shared/services/users.service';
import { UserMitraService } from './shared/services/user_mitra.service';
import { ReferensiKontrakService } from './shared/services/referensi_kontrak.service';
import { MitraService } from './shared/services/mitra.service';
//plnbb module
import { PlnbbComponent } from './plnbb/plnbb.component';
import { PlnbbModule } from './plnbb/plnbb.module';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthenticatedGuard] },

  { path: 'mitra', loadChildren: 'app/mitra/mitra.module#MitraModule', canActivate: [AuthenticatedGuard] },
  
  { path: 'plnbb', loadChildren: 'app/plnbb/plnbb.module#PlnbbModule', canActivate: [AuthenticatedGuard] },
  
  { path: '', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlnbbComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SDKBrowserModule.forRoot(),
    BrowserModule,
    AdminModule,
    MitraModule,
    PlnbbModule,
    SharedModule,
    StorageServiceModule,
    HttpModule
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
    MitraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
