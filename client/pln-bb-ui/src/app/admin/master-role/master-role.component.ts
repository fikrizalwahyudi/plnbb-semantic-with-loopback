import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { userMasterRole } from '../../user/user';
import { promptDialog } from '../../shared/modals/prompt.modal';
import { RolesService } from '../../shared/services/roles.service';

declare var $: any;
@Component({
  selector: 'master-role',
  templateUrl: './master-role.component.html',
  styleUrls: ['./master-role.component.sass']
})
export class MasterRoleComponent implements OnInit {

  data_role: any = [];
  new_role: boolean = false;
  public masterRole: any = userMasterRole;
  keyword = "";
  constructor(private roleService: RolesService) {
  }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(e => {
      this.data_role = e;
      console.log(this.data_role);
    })
  }

  // addNew() {
  //   if (this.new_role) {
  //     this.new_role = false;

  //   } else {
  //     this.new_role = true;
  //   }
  // }

  // onSubmit() {
  //   let val = roleValidation();
  //   if (val){
  //     this.roleService.updateRoles(this.masterRole).subscribe(e => {
  //       console.log(e);
  //       this.clearArray();
  //       this.ngOnInit();
  //     })
  //   }
  // }

  // onSearch() {
  //   $('.ui.search')
  //     .search({
  //       source: this.data_role
  //     });
  // }

  clearArray() {
    this.masterRole.name = "";
    this.masterRole.description = "";
    this.masterRole.status = "";
  }

  // onEdit(index: any){
  //   this.new_role = true;
  //   this.masterRole.id = this.data_role[index].id;
  //   this.masterRole.name = this.data_role[index].name;
  //   this.masterRole.description = this.data_role[index].description;
  //   this.masterRole.status = this.data_role[index].status;
  //   console.log(this.masterRole)
  // }

  // onDelete(id: any) {
  //   promptDialog('Delete data', 'Are you sure to delete this data?',() => {
  //     // onApprove 
  //     this.roleService.deleteRolesById(id).subscribe(e => {
  //       console.log(e);
  //       this.ngOnInit();
  //     }, (error) => {
  //       console.log(error);
  //     })
  //   },
  //   // onDeny
  //     () => {
  //       console.log('deny')
  //     }
  //   );
  // }


}
