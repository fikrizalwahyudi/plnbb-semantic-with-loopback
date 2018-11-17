import { Component, OnInit } from '@angular/core';
import { users } from '../../user/user';
import { dummy_users } from '../../user/source/dummy-user';
import { dummy_role } from '../../user/source/dummy-role';

@Component({
  selector: 'master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.sass']
})
export class MasterUserComponent implements OnInit {
  new_user: boolean = false;
  data_user: any = [];
  data_role: any = []
  dummyMasterUser: any = users;

  constructor() {
    //Soon assign data_role and data_user with data from database
    this.data_role = dummy_role;
    this.data_user = dummy_users;
    for (let i = 0; i < this.data_user.length; i++) {
      this.onChangeRoleName(this.data_user[i].role_id, i);
    }
  }

  ngOnInit() {
    
  }

  addNew() {
    if (this.new_user) {
      this.new_user = false;
    } else {
      this.new_user = true;
    }
  }

  clearArray(){
    this.dummyMasterUser.name = "";
    this.dummyMasterUser.email = "";
    this.dummyMasterUser.password = "";
    this.dummyMasterUser.username = "";
    this.dummyMasterUser.role_id = "";
  }

  onSubmit(){
    this.dummyMasterUser.id = this.data_user.length + 1;
    //Soon submit to database
    this.data_user.push(Object.assign({}, this.dummyMasterUser));
    console.log(this.data_user);
    this.clearArray();
  }

  getSingleValue(identifier: any, source: any[], keySource: string) {
    console.log(identifier, source, keySource)
    return source.find((item) => item[keySource] == identifier);
  }

  onChangeRoleName(selectedRoleID: any, index: any) {
    this.data_user[index]['role_name'] = this.getSingleValue(selectedRoleID, this.data_role, "id").name;
    console.log(this.data_user[index]['role_name']);
  }

}
