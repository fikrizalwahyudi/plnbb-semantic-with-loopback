import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiropComponent } from './dirop.component';
import { DiropShippingInstructionComponent } from './dirop-shipping-instruction/dirop-shipping-instruction.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DiropShippingInstructionBrowseComponent } from './dirop-shipping-instruction/dirop-shipping-instruction-browse/dirop-shipping-instruction-browse.component';
import { DiropShippingInstructionFormComponent } from './dirop-shipping-instruction/dirop-shipping-instruction-form/dirop-shipping-instruction-form.component';

const appRoutes: Routes = [
  { path: '', component: DiropComponent, children: [
    { path: '', redirectTo: 'shipping-instruction', pathMatch: 'full' },
    
    { path: 'shipping-instruction', component: DiropShippingInstructionComponent, data: { breadcrumb: 'Shipping Instruction' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: DiropShippingInstructionBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: ':id/grant', component: DiropShippingInstructionFormComponent, data: { breadcrumb: 'Grant' } }
    ] }

  ] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ],
  declarations: [DiropComponent, DiropShippingInstructionComponent, DiropShippingInstructionBrowseComponent, DiropShippingInstructionFormComponent],
  exports: [DiropComponent, DiropShippingInstructionComponent, DiropShippingInstructionBrowseComponent, DiropShippingInstructionFormComponent]
})
export class DiropModule { }
