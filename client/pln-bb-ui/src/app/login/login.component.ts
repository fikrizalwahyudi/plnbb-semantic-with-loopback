import { Component, OnInit } from '@angular/core';
import { CacheService } from '../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private cache:CacheService, private router:Router, private fb:FormBuilder) { 
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {
    let credentials = this.loginForm.value
    this.cache.users.forEach(user => {
      if(user.username === credentials.username && user.password === credentials.password) {
        this.cache.db.set('user', user)
        return this.router.navigate(['home'])
      }
    })

    return false
  }

}
