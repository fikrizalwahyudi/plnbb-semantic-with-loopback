import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PlnbbRencanaPasokanComponent } from './plnbb-rencana-pasokan/plnbb-rencana-pasokan.component';
import { PlnbbComponent } from './plnbb.component';
import { HomeComponent } from '../admin/home/home.component';

const appRoutes: Routes = [
  { path: 'plnbb', component: PlnbbComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent },
    { path: 'rencana-pasokan', component: PlnbbRencanaPasokanComponent },

  ] }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    PlnbbRencanaPasokanComponent
  ],
  exports : [
    PlnbbRencanaPasokanComponent
  ]
})
export class PlnbbModule { }
