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
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { RolesService } from './shared/services/roles.service';
import { MitraComponent } from './mitra/mitra.component';
import { MitraModule } from './mitra/mitra.module';
import { UsersService } from './shared/services/users.service';
import { UserMitraService } from './shared/services/user_mitra.service';
import { ReferensiKontrakService } from './shared/services/referensi_kontrak.service';
import { MitraService } from './shared/services/mitra.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mitra', component: MitraComponent, loadChildren: './mitra/mitra.module#MitraModule' },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: 'admin/:id', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MitraComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AdminModule,
    MitraModule,
    SharedModule,
    StorageServiceModule,
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [PltuService,RencanaPasokanService, RolesService, GlobalService, UsersService, UserMitraService, ReferensiKontrakService, MitraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
