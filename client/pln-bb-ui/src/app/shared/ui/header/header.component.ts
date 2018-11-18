import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../services/cache.service';
import { Router } from '@angular/router';
import { promptDialog } from '../../modals/prompt.modal';

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  //isAuthenticated
  //isMitra
  //isPlnbb

  constructor(private cache:CacheService, private router:Router) { 
    
  }

  ngOnInit() {

  }

  get username() { return this.cache.db.get('user') && this.cache.db.get('user').username }

  get isAuthenticated() { return !!this.cache.db.get('user') }

  get isMitra() { return this.isAuthenticated && this.cache.db.get('user').role.find(r => r === 'mitra') }

  get isPlnbb() { return this.isAuthenticated && this.cache.db.get('user').role.find(r => r === 'plnbb') }

  get isMitraShipping() { return this.isAuthenticated && this.cache.db.get('user').role.find(r => r === 'transport') }

  get isAdmin() { return this.isAuthenticated && this.cache.db.get('user').role.find(r => r === 'admin') }

  report() {
    // window.open('assets/sample.xlsx')
    return false;
  }

  signOut() {
    promptDialog('Sign Out', 'Do you want to clear saved data?', () => {
      //localStorage.clear()
      this.cache.db.del('user')
      document.location.href = '/'
    }, () => {
      this.cache.db.del('user')
      document.location.href = '/'
    })

    //this.cache.db.del('user')
    //this.router.navigate(['login'])
  }

}
