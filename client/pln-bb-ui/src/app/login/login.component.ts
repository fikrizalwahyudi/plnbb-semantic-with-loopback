import { Component, OnInit } from '@angular/core';
import { CacheService } from '../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { loginValidation } from '../shared/validation/validation';
import { TouchSequence } from 'selenium-webdriver';
import { UserApi } from '../shared/sdk/services/custom/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalid = false;
  submitting = false;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private userApi:UserApi
  ) { 
    if(this.userApi.isAuthenticated()) {
      this.router.navigate(['admin'])
      return;
    }
    
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  save() {
    this.submitting = true
    this.invalid = false
    let credential = this.loginForm.value

    this.userApi.login(credential).subscribe((next) => {
      console.log(next)
      this.router.navigate(['admin'])

      this.submitting = false
    }, (err) => {
      console.log(err)
      this.invalid = true
      this.submitting = false
    })
  }

}
