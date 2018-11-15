import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { MasterRoleComponent } from './admin/master-role/master-role.component';
import { MasterReferensiKontrakComponent } from './admin/master-referensi-kontrak/master-referensi-kontrak.component';
import { MasterTambangComponent } from './admin/master-tambang/master-tambang.component';
import { MasterUserComponent } from './admin/master-user/master-user.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule' },
  // { path: 'admin/master-referensi-kontrak', component: MasterReferensiKontrakComponent },
  // { path: 'admin/master-role', component: MasterRoleComponent },
  // { path: 'admin/master-tambang', component: MasterTambangComponent },
  // { path: 'admin/master-user', component: MasterUserComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    // AdminModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AdminModule,
    StorageServiceModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
