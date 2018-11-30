import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterUserComponent } from './master-user/master-user.component';
import { MasterRoleComponent } from './master-role/master-role.component';
import { MasterReferensiKontrakComponent } from './master-referensi-kontrak/master-referensi-kontrak.component';
import { MasterTambangComponent } from './master-tambang/master-tambang.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterPltuComponent } from './master-pltu/master-pltu.component';
import { SearchRefKontrakPipe } from '../shared/search/ref-kontrak-search.pipe';
import { SearchPLTUPipe } from '../shared/search/pltu-search.pipe';
import { SearchRolePipe } from '../shared/search/role-search.pipe';
import { AdminComponent } from './admin.component';
import { AuthenticatedGuard } from '../shared/guards/authenticated.guard';
import { HomeComponent } from './home/home.component';
import { MasterUserFormComponent } from './master-user/master-user-form/master-user-form.component';
import { MasterUserBrowseComponent } from './master-user/master-user-browse/master-user-browse.component';
import { MasterUserCreateComponent } from './master-user/master-user-form/master-user-create.component';
import { MasterUserEditComponent } from './master-user/master-user-form/master-user-edit.component';
import { SharedModule } from '../shared/shared.module';
import { MasterRoleFormComponent } from './master-role/master-role-form/master-role-form.component';
import { MasterRoleBrowseComponent } from './master-role/master-role-browse/master-role-browse.component';
import { MasterRoleCreateComponent } from './master-role/master-role-form/master-role-create.component';
import { MasterRoleEditComponent } from './master-role/master-role-form/master-role-edit.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticatedGuard], children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent },
    
    { path: 'user', component: MasterUserComponent, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterUserBrowseComponent },
      { path: 'create', component: MasterUserCreateComponent },
      { path: ':id/edit', component: MasterUserEditComponent }
    ] },

    { path: 'role', component: MasterRoleComponent, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterRoleBrowseComponent },
      { path: 'create', component: MasterRoleCreateComponent },
      { path: ':id/edit', component: MasterRoleEditComponent }
    ] }
  ] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    AdminComponent,
    MasterUserComponent, 
    MasterRoleComponent, 
    MasterReferensiKontrakComponent, 
    MasterTambangComponent, 
    MasterPltuComponent,
    SearchRefKontrakPipe, 
    SearchPLTUPipe, 
    SearchRolePipe, 
    HomeComponent, 
    MasterUserFormComponent,
    MasterUserBrowseComponent,
    MasterUserCreateComponent,
    MasterUserEditComponent,
    MasterRoleFormComponent,
    MasterRoleBrowseComponent,
    MasterRoleCreateComponent,
    MasterRoleEditComponent
  ],
  exports : [
    MasterUserComponent, 
    MasterRoleComponent, 
    MasterReferensiKontrakComponent, 
    MasterTambangComponent,
    MasterPltuComponent,
    MasterRoleFormComponent,
    MasterRoleBrowseComponent,
    MasterRoleCreateComponent,
    MasterRoleEditComponent
  ]
})
export class AdminModule { }
