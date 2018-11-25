import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RencanaPasokanComponent } from './rencana-pasokan/rencana-pasokan.component';
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
    RencanaPasokanComponent
  ],
  exports : [
    RencanaPasokanComponent
  ]
})
export class MitraModule { }
