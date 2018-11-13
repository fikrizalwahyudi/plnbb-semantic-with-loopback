import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent}
];
=======


import { AppComponent } from './app.component';
>>>>>>> master


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
=======
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
>>>>>>> master
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
