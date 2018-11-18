import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { userMasterRole } from '../../user/user';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { inject } from '@angular/core/src/render3';

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
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    // dummy user
    this.dummyUser.id = "1";
    this.dummyUser.name = "Adi Maulana Triadi";
    this.dummyUser.description = "Fresh Graduate";
    this.dummyUser.status = "Melajang";

    this.userMasterRole.push(Object.assign({}, this.dummyUser));
    this.storage.set('dataUser', this.userMasterRole);
    this.dummyUser.id = this.userMasterRole.length + 1;
    this.dummyUser.name = "";
    this.dummyUser.description = "";
    this.dummyUser.status = "";
    this.userMasterRole = this.storage.get('dataUser');
  }

  ngOnInit() {
    this.userMasterRole = this.storage.get('dataUser');
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
    this.storage.set('dataUser', this.userMasterRole);
    this.ngOnInit();
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
