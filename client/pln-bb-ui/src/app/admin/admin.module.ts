import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterUserComponent } from './master-user/master-user.component';
import { MasterRoleComponent } from './master-role/master-role.component';
import { MasterReferensiKontrakComponent } from './master-referensi-kontrak/master-referensi-kontrak.component';
import { MasterTambangComponent } from './master-tambang/master-tambang.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterPltuComponent } from './master-pltu/master-pltu.component';
import { SearchRefKontrakPipe } from '../shared/search/ref-kontrak-search.pipe';
import { SearchPLTUPipe } from '../shared/search/pltu-search.pipe';
import { SearchRolePipe } from '../shared/search/role-search.pipe';

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
    MasterTambangComponent, MasterPltuComponent,
    SearchRefKontrakPipe, SearchPLTUPipe, SearchRolePipe
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
