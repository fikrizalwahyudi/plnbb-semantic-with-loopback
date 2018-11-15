import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterUserComponent } from './master-user/master-user.component';
import { MasterRoleComponent } from './master-role/master-role.component';
import { MasterReferensiKontrakComponent } from './master-referensi-kontrak/master-referensi-kontrak.component';
import { MasterTambangComponent } from './master-tambang/master-tambang.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterPltuComponent } from './master-pltu/master-pltu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MasterUserComponent, 
    MasterRoleComponent, 
    MasterReferensiKontrakComponent, 
    MasterTambangComponent, MasterPltuComponent
  ],
  exports : [
    MasterUserComponent, 
    MasterRoleComponent, 
    MasterReferensiKontrakComponent, 
    MasterTambangComponent,
    MasterPltuComponent
  ]
})
export class AdminModule { }
