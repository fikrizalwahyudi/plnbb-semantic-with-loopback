import { Component, OnInit } from '@angular/core';
import { RoleApi } from '../../../shared/sdk/services/custom/Role';
import { Role } from '../../../shared/sdk/models/Role';

@Component({
  selector: 'app-master-role-browse',
  templateUrl: './master-role-browse.component.html',
  styleUrls: ['./master-role-browse.component.sass']
})
export class MasterRoleBrowseComponent implements OnInit {

  roles:Role[]

  constructor(
    private roleApi:RoleApi
  ) { 
    this.roleApi.find({limit: 30}).subscribe(data => {
      this.roles = data as Role[]
    })
  }

  ngOnInit() {
  }

}
