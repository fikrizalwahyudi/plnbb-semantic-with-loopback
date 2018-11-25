import { Component, OnInit } from '@angular/core';
import { CacheService } from '../shared/services/cache.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { loginValidation } from '../shared/validation/validation';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  email:any;
  password:any

  constructor(private cache:CacheService, private router:Router) { 
   
  }

  ngOnInit() {
  }

  login() {
    let valid = loginValidation();
    // let credentials = this.loginForm.valuez
    return this.router.navigate(['admin']);
  }

}
