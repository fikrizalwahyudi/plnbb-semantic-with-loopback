import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiropComponent } from './dirop.component';
import { DiropShippingInstructionComponent } from './dirop-shipping-instruction/dirop-shipping-instruction.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'dirop', component: DiropComponent, data: { breadcrumb: 'Direktur Operasi' }, children: [
    { path: '', redirectTo: 'shipping-instruction', pathMatch: 'full' },
    
    { path: 'shipping-instruction', component: DiropShippingInstructionComponent, data: { breadcrumb: 'Shipping Instruction' } }

  ] }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiropComponent, DiropShippingInstructionComponent],
  exports: [DiropComponent, DiropShippingInstructionComponent]
})
export class DiropModule { }
