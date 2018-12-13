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
import { HomeComponent } from './home/home.component';
import { MasterUserFormComponent } from './master-user/master-user-form/master-user-form.component';
import { MasterUserBrowseComponent } from './master-user/master-user-browse/master-user-browse.component';
import { MasterUserCreateComponent } from './master-user/master-user-form/master-user-create.component';
import { MasterUserEditComponent } from './master-user/master-user-form/master-user-edit.component';
import { SharedModule } from '../shared/shared.module';
import { RencanaPasokanService } from '../shared/services/rencana_pasokan.service';
import { RolesService } from '../shared/services/roles.service';
import { GlobalService } from '../shared/services/global.service';
import { UsersService } from '../shared/services/users.service';
import { UserMitraService } from '../shared/services/user_mitra.service';
import { ReferensiKontrakService } from '../shared/services/referensi_kontrak.service';
import { MitraService } from '../shared/services/mitra.service';
import { ReferensiKontrakMitraService } from '../shared/services/referensi_kontrak_mitra.service';
import { MasterRoleFormComponent } from './master-role/master-role-form/master-role-form.component';
import { MasterRoleBrowseComponent } from './master-role/master-role-browse/master-role-browse.component';
import { MasterRoleCreateComponent } from './master-role/master-role-form/master-role-create.component';
import { MasterRoleEditComponent } from './master-role/master-role-form/master-role-edit.component';
import { MasterMitraBrowseComponent } from './master-mitra/master-mitra-browse/master-mitra-browse.component';
import { MasterMitraFormComponent } from './master-mitra/master-mitra-form/master-mitra-form.component';
import { MasterMitraCreateComponent } from './master-mitra/master-mitra-form/master-mitra-create.component';
import { MasterMitraEditComponent } from './master-mitra/master-mitra-form/master-mitra-edit.component';
import { MasterMitraUserFormComponent } from './master-mitra/master-mitra-user-form/master-mitra-user-form.component';
import { MasterMitraUserCreateComponent } from './master-mitra/master-mitra-user-form/master-mitra-user-create.component';
import { MasterMitraComponent } from './master-mitra/master-mitra.component';
import { MasterTambangFormComponent } from './master-tambang/master-tambang-form/master-tambang-form.component';
import { MasterTambangBrowseComponent } from './master-tambang/master-tambang-browse/master-tambang-browse.component';
import { MasterTambangCreateComponent } from './master-tambang/master-tambang-form/master-tambang-create.component';
import { MasterTambangEditComponent } from './master-tambang/master-tambang-form/master-tambang-edit.component';
import { MasterPltuFormComponent } from './master-pltu/master-pltu-form/master-pltu-form.component';
import { MasterPltuBrowseComponent } from './master-pltu/master-pltu-browse/master-pltu-browse.component';
import { MasterPltuCreateComponent } from './master-pltu/master-pltu-form/master-pltu-create.component';
import { MasterPltuEditComponent } from './master-pltu/master-pltu-form/master-pltu-edit.component';
import { MasterReferensiKontrakFormComponent } from './master-referensi-kontrak/master-referensi-kontrak-form/master-referensi-kontrak-form.component';
import { MasterReferensiKontrakBrowseComponent } from './master-referensi-kontrak/master-referensi-kontrak-browse/master-referensi-kontrak-browse.component';
import { MasterReferensiKontrakCreateComponent } from './master-referensi-kontrak/master-referensi-kontrak-form/master-referensi-kontrak-create.component';
import { MasterReferensiKontrakEditComponent } from './master-referensi-kontrak/master-referensi-kontrak-form/master-referensi-kontrak-edit.component';
import { MasterUserMitraComponent } from './master-user-mitra/master-user-mitra.component';
import { MasterUserMitraBrowseComponent } from './master-user-mitra/master-user-mitra-browse/master-user-mitra-browse.component';
import { MasterUserMitraFormComponent } from './master-user-mitra/master-user-mitra-form/master-user-mitra-form.component';
import { MasterUserMitraCreateComponent } from './master-user-mitra/master-user-mitra-form/master-user-mitra-create.component';
import { MasterReferensiKontrakPltuComponent } from './master-referensi-kontrak/master-referensi-kontrak-pltu/master-referensi-kontrak-pltu.component';
import { MasterReferensiKontrakTambangComponent } from './master-referensi-kontrak/master-referensi-kontrak-tambang/master-referensi-kontrak-tambang.component';
import { MasterJettyComponent } from './master-jetty/master-jetty.component';
import { MasterJettyBrowseComponent } from './master-jetty/master-jetty-browse/master-jetty-browse.component';
import { MasterJettyFormComponent } from './master-jetty/master-jetty-form/master-jetty-form.component';
import { MasterJettyCreateComponent } from './master-jetty/master-jetty-form/master-jetty-create.component';
import { MasterJettyEditComponent } from './master-jetty/master-jetty-form/master-jetty-edit.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, data: { breadcrumb: 'Administration' }, children: [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    
    { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'user', component: MasterUserComponent, data: { breadcrumb: 'User' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterUserBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterUserCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterUserEditComponent, data: { breadcrumb: 'Edit' } }
    ] },

    { path: 'role', component: MasterRoleComponent, data: { breadcrumb: 'Role' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterRoleBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterRoleCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterRoleEditComponent, data: { breadcrumb: 'Edit' } }
    ] },

    { path: 'tambang', component: MasterTambangComponent, data: { breadcrumb: 'Tambang' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterTambangBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterTambangCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterTambangEditComponent, data: { breadcrumb: 'Edit' } }
    ] },

    { path: 'mitra', component: MasterMitraComponent, data: { breadcrumb: 'Mitra' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterMitraBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterMitraCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterMitraEditComponent, data: { breadcrumb: 'Edit' } }
    ] },
    
    { path: 'pltu', component: MasterPltuComponent, data: { breadcrumb: 'PLTU' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterPltuBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterPltuCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterPltuEditComponent, data: { breadcrumb: 'Edit' } }
    ] },

    { path: 'referensi-kontrak', component: MasterReferensiKontrakComponent, data: { breadcrumb: 'Referensi Kontrak' }, children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', component: MasterReferensiKontrakBrowseComponent, data: { breadcrumb: 'Browse' } },
      { path: 'create', component: MasterReferensiKontrakCreateComponent, data: { breadcrumb: 'Create' } },
      { path: ':id/edit', component: MasterReferensiKontrakEditComponent, data: { breadcrumb: 'Edit' } },
      { path: ':id/pltu', component: MasterReferensiKontrakPltuComponent },
      { path: ':id/tambang', component: MasterReferensiKontrakTambangComponent }
    ] },

    {
      path: 'jetty', component: MasterJettyComponent, data: { breadcrumb: 'Jetty' }, children: [
        { path: '', redirectTo: 'browse', pathMatch: 'full' },
        { path: 'browse', component: MasterJettyBrowseComponent, data: { breadcrumb: 'Browse' } },
        { path: 'create', component: MasterJettyCreateComponent, data: { breadcrumb: 'Create' } },
        { path: ':id/edit', component: MasterJettyEditComponent, data: { breadcrumb: 'Edit' } },
      ]
    },
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
    MasterMitraComponent,
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
    MasterRoleEditComponent,
    MasterMitraBrowseComponent,
    MasterMitraFormComponent,
    MasterMitraCreateComponent,
    MasterMitraEditComponent,
    MasterMitraUserFormComponent,
    MasterMitraUserCreateComponent,
    MasterTambangFormComponent,
    MasterTambangBrowseComponent,
    MasterTambangCreateComponent,
    MasterTambangEditComponent,
    MasterPltuFormComponent,
    MasterPltuBrowseComponent,
    MasterPltuCreateComponent,
    MasterPltuEditComponent,
    MasterReferensiKontrakFormComponent,
    MasterReferensiKontrakBrowseComponent,
    MasterReferensiKontrakCreateComponent,
    MasterReferensiKontrakEditComponent,
    MasterUserMitraComponent,
    MasterUserMitraBrowseComponent,
    MasterUserMitraFormComponent,
    MasterUserMitraCreateComponent,
    MasterReferensiKontrakPltuComponent,
    MasterReferensiKontrakTambangComponent,
    MasterJettyComponent,
    MasterJettyBrowseComponent,
    MasterJettyFormComponent,
    MasterJettyCreateComponent,
    MasterJettyEditComponent
  ],
  exports : [
    MasterUserComponent, 
    MasterRoleComponent, 
    MasterMitraComponent,
    MasterReferensiKontrakComponent, 
    MasterTambangComponent,
    MasterPltuComponent,
    MasterTambangComponent,
    MasterReferensiKontrakComponent,
    MasterReferensiKontrakPltuComponent,
    MasterReferensiKontrakTambangComponent
  ],
  providers: [
    RencanaPasokanService, 
    RolesService, 
    GlobalService, 
    UsersService, 
    UserMitraService, 
    ReferensiKontrakService, 
    MitraService,
    ReferensiKontrakMitraService,
    MasterRoleFormComponent,
    MasterRoleBrowseComponent,
    MasterRoleCreateComponent,
    MasterRoleEditComponent,
    MasterMitraBrowseComponent,
    MasterMitraFormComponent,
    MasterMitraCreateComponent,
    MasterMitraEditComponent,
    MasterMitraUserFormComponent,
    MasterMitraUserCreateComponent,
    MasterTambangFormComponent,
    MasterTambangBrowseComponent,
    MasterTambangCreateComponent,
    MasterTambangEditComponent,
    MasterPltuBrowseComponent,
    MasterPltuFormComponent,
    MasterPltuCreateComponent,
    MasterPltuEditComponent,
    MasterReferensiKontrakFormComponent,
    MasterReferensiKontrakBrowseComponent,
    MasterReferensiKontrakCreateComponent,
    MasterReferensiKontrakEditComponent,
    MasterUserMitraComponent,
    MasterUserMitraBrowseComponent,
    MasterUserMitraFormComponent,
    MasterUserMitraCreateComponent
  ]
})
export class AdminModule { }
