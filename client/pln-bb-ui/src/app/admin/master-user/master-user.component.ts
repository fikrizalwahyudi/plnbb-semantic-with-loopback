import { Component, OnInit, Inject } from '@angular/core';
import { users } from '../../user/user';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.sass']
})
export class MasterUserComponent implements OnInit {
  new_user: boolean = false;
  arrUsers: any = [];
  dummyMasterUser: any = users;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { 
    this.dummyMasterUser.id = "1";
    this.dummyMasterUser.name = "Adi Maulana Triadi";
    this.dummyMasterUser.email = "adimaulanat@gmail.com";
    this.dummyMasterUser.password = "1234";
    this.dummyMasterUser.username = "adimaulanat";
    this.dummyMasterUser.role_id = "1";

    this.arrUsers.push(Object.assign({}, this.dummyMasterUser));
    this.storage.set('dataDummyUser', this.arrUsers);
    this.clearArray();
  }

  ngOnInit() {
    this.arrUsers = this.storage.get('dataDummyUser');
  }

  addNew() {
    if (this.new_user) {
      this.new_user = false;
    } else {
      this.new_user = true;
    }
  }

  clearArray(){
    this.dummyMasterUser.id = this.arrUsers.length + 1;
    this.dummyMasterUser.name = "";
    this.dummyMasterUser.email = "";
    this.dummyMasterUser.password = "";
    this.dummyMasterUser.username = "";
    this.dummyMasterUser.role_id = "";

    
  }

  onSubmit(){
    this.dummyMasterUser.id = this.arrUsers.length + 1;
    this.arrUsers.push(Object.assign({}, this.dummyMasterUser));
    this.storage.set('dataDummyUser', this.arrUsers);
    this.arrUsers = this.storage.get('dataDummyUser');
    console.log(this.arrUsers);
    this.clearArray();
  }

}
