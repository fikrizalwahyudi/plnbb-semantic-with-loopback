import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../../../shared/validators/password.validator';
import { Router } from '@angular/router';
import { RoleApi } from '../../../shared/sdk/services/custom/Role';
import { Role } from '../../../shared/sdk/models/Role';

@Component({
  selector: 'master-user-form',
  templateUrl: './master-user-form.component.html',
  styleUrls: ['./master-user-form.component.sass']
})
export class MasterUserFormComponent implements OnInit {
  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  roles
  fg:FormGroup
  errorMsg
  submitting

  constructor(
    private roleApi:RoleApi,
    private fb:FormBuilder,
    private router:Router
  ) { 
    /*this.roleApi.find().subscribe(data => {
      //this.roles = data as Role[]
      //console.log(this.roles)
      this.roles = data.map((entry:any) => {
        return {
          name: entry.description,
          value: entry.id
        }
      })
    })*/

    this.roles = this.roleApi.find().map((data:any) => {
      return data.map(entry => {
        return {
          name: entry.description,
          value: entry.id
        }
      })      
    })

    this.fg = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      password2: [null, [Validators.required]],
      roles: [null, [Validators.required]]
    }, {
      validator: passwordMatch
    })
  }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/admin', 'user'])
  }
}
