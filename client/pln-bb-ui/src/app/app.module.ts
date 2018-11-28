import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { StorageServiceModule} from 'angular-webstorage-service';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { PltuService } from './shared/services/pltu.service';
import { RencanaPasokanService } from './shared/services/rencana_pasokan.service';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { SDKBrowserModule } from './shared/sdk/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthenticatedGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SDKBrowserModule.forRoot(),
    BrowserModule,
    AdminModule,
    SharedModule,
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
