import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MitraApi } from '../../../shared/sdk/services/custom/Mitra';
import { Mitra } from '../../../shared/sdk/models/Mitra';
import { UserApi } from '../../../shared/sdk/services/custom/User';
import { User } from '../../../shared/sdk/models/User';
import { UserMitraApi } from '../../../shared/sdk/services/custom/UserMitra';
import { UserMitra } from '../../../shared/sdk/models/UserMitra';

@Component({
  selector: 'master-user-mitra-form',
  templateUrl: './master-user-mitra-form.component.html',
  styleUrls: ['./master-user-mitra-form.component.sass']
})
export class MasterUserMitraFormComponent implements OnInit {
  @Output('init') onInit = new EventEmitter()
  @Output('save') onSave = new EventEmitter()

  fg:FormGroup
  errorMsg
  submitting
  userMitras:UserMitra[]
  mitraIds:any
  userIds:any
  mitras:Mitra[]
  users:User[]

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private mitraApi: MitraApi,
    private userApi: UserApi,
    private userMitraApi: UserMitraApi
  ) { 
    this.fg = this.fb.group({
      user_id: [null, [Validators.required]],
      mitra_id: [null, [Validators.required]]
    })

    this.userMitraApi.find().subscribe(data => {
      this.userMitras = data as UserMitra[]
      this.mitraIds = this.userMitras.map(function (e) {
        return e.userId
      });

      this.userIds = this.userMitras.map(function (e) {
        return e.userId
      });

      this.mitraApi.find().subscribe(dataMitra => {
        this.mitras = dataMitra as Mitra[]
        this.mitras = this.mitras.filter(d => !this.mitraIds.includes(d.id))
      })

      this.userApi.find().subscribe(dataUser => {
        this.users = dataUser as User[]
        this.users = this.users.filter(d => !this.userIds.includes(d.id))
      })
    })
  }

  ngOnInit() {
    this.onInit.emit(this.fg)
  }

  save() {
    this.onSave.emit(this.fg.value)
  }

  cancel() {
    this.router.navigate(['/admin', 'mitra', 'user'])
  }

}
