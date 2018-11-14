import { Component, OnInit } from '@angular/core';
import { userMasterRole } from '../../user/user';

declare var $: any;
@Component({
  selector: 'master-role',
  templateUrl: './master-role.component.html',
  styleUrls: ['./master-role.component.sass']
})
export class MasterRoleComponent implements OnInit {

  userMasterRole: any = [];
  new_role: boolean = false;
  public dummyUser: any = userMasterRole;
  constructor() {
    // dummy user
    this.dummyUser.id = "1";
    this.dummyUser.name = "Adi Maulana Triadi";
    this.dummyUser.description = "Fresh Graduate";
    this.dummyUser.status = "Melajang";

    this.userMasterRole.push(Object.assign({}, this.dummyUser));
    this.dummyUser.id = this.userMasterRole.length + 1;
    this.dummyUser.name = "";
    this.dummyUser.description = "";
    this.dummyUser.status = "";
  }

  ngOnInit() {
  }

  addNew() {
    if (this.new_role) {
      this.new_role = false;

    } else {
      this.new_role = true;
    }
  }

  onSubmit() {
    this.userMasterRole.push(Object.assign({}, this.dummyUser));
    this.dummyUser.id = this.userMasterRole.length + 1;
    this.dummyUser.name = "";
    this.dummyUser.description = "";
    this.dummyUser.status = "";
  }

  onSearch() {
    $('.ui.search')
      .search({
        source: this.userMasterRole
      });
  }


}
