import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RencanaPasokanPlnbbComponent } from './rencana-pasokan-plnbb/rencana-pasokan-plnbb.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RencanaPasokanPlnbbComponent
  ],
  exports : [
    RencanaPasokanPlnbbComponent
  ]
})
export class PlnbbModule { }
