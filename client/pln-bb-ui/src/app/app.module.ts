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
<<<<<<< HEAD
import { RolesService } from './shared/services/roles.service';
=======
import { MitraComponent } from './mitra/mitra.component';
import { MitraModule } from './mitra/mitra.module';
import { UsersService } from './shared/services/users.service';
import { UserMitraService } from './shared/services/user_mitra.service';
>>>>>>> 069afe8b72a9cb9202c495c33228a51fbd2524a6

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
<<<<<<< HEAD
  providers: [PltuService,RencanaPasokanService,RolesService],
=======
  providers: [PltuService,RencanaPasokanService, GlobalService, UsersService, UserMitraService],
>>>>>>> 069afe8b72a9cb9202c495c33228a51fbd2524a6
  bootstrap: [AppComponent]
})
export class AppModule { }
