import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private fb:FormBuilder) {
    this.loginForm = fb.group({
      username: [null],
      password: [null]
    })
  }

  ngOnInit() {
  }

  login() {
    let credentials = this.loginForm.value
    // this.cache.users.forEach(user => {
      if(credentials.username !== null && credentials.password !== null) {
        // this.cache.db.set('user', user)
        // return this.router.navigate(['home'])
        console.log('success');
        return true
      }
    // })

    return false
  }

}
