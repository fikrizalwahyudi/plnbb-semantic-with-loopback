import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get username() { return null }

  get isAuthenticated() { return true }

  get isMitra() { return true }

  get isPlnbb() { return false }

  get isMitraShipping() { return false }

  get isAdmin() { return false }

  report() {
    return;
    // window.open('assets/sample.xlsx')
  }

  signOut() {
    return;
  }

}
