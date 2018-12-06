import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserApi } from '../../sdk/services/custom/User';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'ui-component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private accountApi:UserApi, private menuService:MenuService) { 
    //console.log(this.accountApi.getCurrentId())
    //console.log(this.accountApi.getCachedCurrent())
    //this.accountApi.getCurrent().subscribe(account => console.log(account))
  }

  ngOnInit() {
  }

  logout() {
    //document.location.href = `${environment.apiUrl}/auth/logout`
    this.accountApi.logout().subscribe(() => {
      document.location.href = 'login'
    }, () => {
      document.location.href = 'login'
    })
  }

  get isAuthenticated() { return this.accountApi.isAuthenticated() }

  get menus() { return this.menuService.topMenus }

  get account() { return this.accountApi.getCachedCurrent() }
}
