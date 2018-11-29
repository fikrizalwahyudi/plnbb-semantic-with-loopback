import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { User } from '../../../shared/sdk/models/User';

@Component({
  selector: 'master-user-browse',
  templateUrl: './master-user-browse.component.html',
  styleUrls: ['./master-user-browse.component.sass']
})
export class MasterUserBrowseComponent implements OnInit {

  users:User[]

  constructor(private userApi:UserApi) { 
    this.userApi.find({limit: 10}).subscribe((data) => {
      this.users = data as User[]
    })
  }

  ngOnInit() {
  }

}
