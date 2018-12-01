import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { User } from '../../../shared/sdk/models/User';
import { promptDialog } from '../../../shared/modals/prompt.modal';

@Component({
  selector: 'master-user-browse',
  templateUrl: './master-user-browse.component.html',
  styleUrls: ['./master-user-browse.component.sass']
})
export class MasterUserBrowseComponent implements OnInit {

  users:User[]
  errorMsg

  constructor(private userApi:UserApi) { 
    this.userApi.find({limit: 30}).subscribe((data) => {
      this.users = data as User[]
    })
  }

  ngOnInit() {
  }

  delete(item) {
    this.errorMsg = undefined

    promptDialog('Delete this record?', 'after deleting, the record will not be recoverable', () => {
      this.userApi.deleteById(item.id).subscribe(data => {
        this.users = this.users.filter(u => u.id !== item.id)
      }, err => {
        this.errorMsg = err.message
      })
    }, () => {})
  }

}
