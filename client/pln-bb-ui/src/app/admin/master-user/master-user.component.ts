import { Component, OnInit } from '@angular/core';
import { dummy_users } from '../../user/source/dummy-user';
import { dummy_role } from '../../user/source/dummy-role';
import { dummy_mitra } from '../../user/source/dummy-mitra';
import { GlobalService } from '../../shared/services/global.service';
import { Users } from '../../shared/models/users';
import { userValidation, userMitraValidation } from '../../shared/validation/user.validation';
import { UsersService } from '../../shared/services/users.service';
import { UserMitraService } from '../../shared/services/user_mitra.service';

@Component({
  selector: 'master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.sass']
})
export class MasterUserComponent implements OnInit {
  new_user: boolean = false;
  is_mitra: boolean = false;
  data_user: any = [];
  data_role: any = [];
  data_mitra: any = [];
  masterUser: any = new Users();
  masterUserMitra: any = {};

  constructor(private gs: GlobalService, private userService: UsersService, private userMitraService: UserMitraService) {
    //Soon assign data_role and data_user with data from database
    this.data_role = dummy_role;
    this.data_mitra = dummy_mitra;
    this.masterUserMitra = {mitra_id: null, user_id: null};

  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(e => {
      this.data_user = e;

      for (let i = 0; i < this.data_user.length; i++) {
        this.onChangeRoleName(this.data_user[i].role_id, i);
        this.onChangeStatus(this.data_user[i].status, i)
      }
    })

  }

  addNew() {
    if (this.new_user) {
      this.new_user = false;
    } else {
      this.new_user = true;
    }
  }

  clearArray(){
    this.masterUser = new Users();
    this.masterUserMitra = { mitra_id: null, user_id: null}
    this.is_mitra = false;
  }

  onSubmit(){
    let isMitra = this.is_mitra;
    let masterUserMitra = this.masterUserMitra
    let userValid = userValidation();
    let mitraValid = (this.is_mitra) ? userMitraValidation() : true;
    if (userValid && mitraValid) {
      this.masterUser.status = 1;
      this.userService.createUsers(this.masterUser).subscribe(e => {
        if(isMitra){
          masterUserMitra.user_id = e.id
          this.userMitraService.createUserMitra(masterUserMitra).subscribe(m => {
          })
        }
        this.new_user = false;
        this.ngOnInit();
      });
    this.clearArray();
    } else {
      console.log('form invalid');
    }
  }

  onChangeRole(id: any){
    var name = this.data_role.find(x => x.id === id).name;
    if(name && name.toLowerCase() == 'mitra')
      this.is_mitra = true;
    else{
      this.is_mitra = false;
      this.masterUserMitra = { mitra_id: null, user_id: null}
    }
  }

  onChangeRoleName(selectedRoleID: any, index: any) {
    this.data_user[index]['role_name'] = this.gs.getSingleValue(selectedRoleID, this.data_role, "id").name;
  }

  onChangeStatus(value: any, index: any){
    var status = "Tidak Aktif"
    if(value == 1)
      status = "Aktif"

    this.data_user[index]['status_name'] = status
  }

}
