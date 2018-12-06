import { Component, OnInit } from '@angular/core';
import { UserMitraApi } from '../../../shared/sdk/services/custom/UserMitra';
import { UserMitra } from '../../../shared/sdk/models/UserMitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { User } from '../../../shared/sdk/models/User';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { promptDialog } from '../../../shared/modals/prompt.modal';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-master-user-mitra-browse',
  templateUrl: './master-user-mitra-browse.component.html',
  styleUrls: ['./master-user-mitra-browse.component.sass']
})
export class MasterUserMitraBrowseComponent implements OnInit {

  userMitras:UserMitra[]
  users:User[]
  mitras:Mitra[]
  errorMsg: string;

  constructor(
    private userMitraApi:UserMitraApi,
    private mitraApi:MitraApi,
    private userApi:UserApi,
    public gs:GlobalService
  ) { 
    this.mitraApi.find().subscribe(data => {
      this.mitras = data as Mitra[]
    })

    this.userApi.find().subscribe(data => {
      this.users = data as User[]
    })

    this.userMitraApi.find({limit: 30}).subscribe(data => {
      this.userMitras = data as UserMitra[]

      for (let i = 0; i < this.userMitras.length; i++) {
        this.getMitraDetail(this.userMitras[i].mitraId, i);
        this.getUserDetail(this.userMitras[i].userId, i)
      }

    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.userMitraApi.deleteById(item.id).subscribe(data => {
        this.userMitras = this.userMitras.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => {})
  }

  getMitraDetail(selectedId: any, index: any) {
    var mitra = this.gs.getSingleValue(selectedId, this.mitras, "id")
    this.userMitras[index]['mitra_code'] = mitra.code;
    this.userMitras[index]['mitra_name'] = mitra.name;
  }

  getUserDetail(selectedId: any, index: any) {
    var user = this.gs.getSingleValue(selectedId, this.users, "id")
    this.userMitras[index]['user_username'] = user.username;
  }
}
