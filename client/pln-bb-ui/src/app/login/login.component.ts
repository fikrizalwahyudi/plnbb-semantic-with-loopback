import { Component, OnInit } from '@angular/core';
import { CacheService } from '../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { loginValidation } from '../shared/validation/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private router:Router) { 
   
  }

  ngOnInit() {
  }

  login() {
    let a = loginValidation();
    // let credentials = this.loginForm.value
    // this.cache.users.forEach(user => {
    //   if(user.username === credentials.username && user.password === credentials.password) {
    //     this.cache.db.set('user', user)
    //     return this.router.navigate(['home'])
    //   }
    // })

    return false
  }

}
