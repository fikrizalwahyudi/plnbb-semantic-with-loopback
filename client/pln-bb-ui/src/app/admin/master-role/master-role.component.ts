import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { userMasterRole } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { inject } from '@angular/core/src/render3';
import { dummy_role } from '../../user/source/dummy-role';

declare var $: any;
@Component({
  selector: 'master-role',
  templateUrl: './master-role.component.html',
  styleUrls: ['./master-role.component.sass']
})
export class MasterRoleComponent implements OnInit {

  data_role: any = [];
  new_role: boolean = false;
  public dummyUser: any = userMasterRole;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    //Soon assign data_role with data from database
    this.data_role = dummy_role;
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
    this.dummyUser.id = this.data_role.length + 1;
    //Soon submit to database
    this.data_role.push(Object.assign({}, this.dummyUser));
    this.clearArray();
  }

  onSearch() {
    $('.ui.search')
      .search({
        source: this.data_role
      });
  }

  clearArray() {
    this.dummyUser.name = "";
    this.dummyUser.description = "";
    this.dummyUser.status = "";
  }


}
