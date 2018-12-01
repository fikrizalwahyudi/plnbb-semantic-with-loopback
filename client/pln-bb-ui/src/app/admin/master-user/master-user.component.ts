import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { dummy_role } from '../../user/source/dummy-role';
import { GlobalService } from '../../shared/services/global.service';
import { Users } from '../../shared/models/users';
import { userValidation, userMitraValidation } from '../../shared/validation/master-user.validation';
import { UsersService } from '../../shared/services/users.service';
import { UserMitraService } from '../../shared/services/user_mitra.service';
import { MitraService } from '../../shared/services/mitra.service';
import { promptDialog } from '../../shared/modals/prompt.modal';
=======
>>>>>>> master

@Component({
  selector: 'master-user',
  templateUrl: './master-user.component.html',
  styleUrls: ['./master-user.component.sass']
})
export class MasterUserComponent implements OnInit {
<<<<<<< HEAD
  new_user: boolean = false;
  isEdit: boolean = false;
  data_user: any = [];
  data_role: any = [];
  data_mitra: any = [];
  masterUser: any = new Users();

  constructor(private gs: GlobalService, private userService: UsersService,
    private mitraService: MitraService) {
    //Soon assign data_role and data_user with data from database
    this.data_role = dummy_role;
    this.getMitra();
  }

  ngOnInit() {
    this.isEdit = false;
    this.userService.getAllUsers().subscribe(e => {
      this.data_user = e;

      for (let i = 0; i < this.data_user.length; i++) {
        this.onChangeRoleName(this.data_user[i].role_id, i);
        this.onChangeStatus(this.data_user[i].status, i)
      }
    })

  }

  clearArray(){
    this.masterUser = new Users();
  }

  onSubmit(){
    let userValid = userValidation();
    if (userValid) {
      this.masterUser.status = 1;
      if (this.isEdit){
        delete this.masterUser.password
        this.userService.updateUsers(this.masterUser).subscribe(e => {
          this.clearArray();
          this.ngOnInit();
        })
      } else {
        this.userService.createUsers(this.masterUser).subscribe(e => {
          console.log(e)
          this.ngOnInit();
          this.clearArray();
        });
      }
    } else {
      console.log('form invalid');
    }
  }

  addNew() {
    if (this.new_user) {
      this.new_user = false;

    } else {
      this.masterUser = new Users();
      this.new_user = true;
      this.isEdit = false;
    }
  }

  onEdit(index: any){
    this.new_user = true;
    this.masterUser.id = this.data_user[index].id;
    this.masterUser.email = this.data_user[index].email;
    this.masterUser.username = this.data_user[index].username;
    this.masterUser.name = this.data_user[index].name;
    this.masterUser.role_id = this.data_user[index].role_id;
    this.isEdit = true;
  }

  onDelete(id: any) {
    promptDialog('Delete data', 'Are you sure to delete this data?',() => {
      // onApprove 
      this.userService.deleteUsersById(id).subscribe(e => {
        console.log(e);
        this.ngOnInit();
      }, (error) => {
        console.log(error);
      })
    },
    // onDeny
      () => {
        console.log('deny')
      }
    );
  }

  onChangeRoleName(selectedRoleID: any, index: any) {
    this.data_user[index]['role_name'] = this.gs.getSingleValue(selectedRoleID, this.data_role, "id").name;
  }

  onChangeStatus(value: any, index: any){
    var status = "Tidak Aktif"
    if(value == 1)
      status = "Aktif"

    this.data_user[index]['status_name'] = status
=======

  constructor() {
    
  }

  ngOnInit() {
   
>>>>>>> master
  }

  getMitra(){
    this.mitraService.getAllMitra().subscribe(e => {
      this.data_mitra = e;
    })
  }

}
