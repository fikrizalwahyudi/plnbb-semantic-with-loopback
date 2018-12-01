import { Injectable } from '@angular/core';
import { UserApi } from '../sdk/services/custom/User';

export interface Menu
{
  path:string
  label:string,
  class?:string,
  data?:any,
  tag?:string,
  canActivate?:any
}

export type Menus = Menu[]

@Injectable()
export class MenuService {

  private _topMenus:Menus = []

  constructor(private accountApi:UserApi) { 
    const isAuthenticated = () => { return accountApi.isAuthenticated() }
    const isNotAuthenticated = () => { return !accountApi.isAuthenticated() }

    /*this._topMenus = [{
      path: 'auth',
      label: 'Login',
      class: 'sign-in icon',
      canActivate: isNotAuthenticated
    }, {
      path: 'home',
      label: 'Browse Apps',
      class: 'home icon',
      canActivate: isAuthenticated
    }, {
      path: 'admin',
      label: 'Administration',
      class: 'desktop icon',
      canActivate: isAuthenticated
    }, {
      path: 'dev',
      label: 'Developer Console',
      class: 'code icon',
      canActivate: isAuthenticated
    }, {
      path: 'repo',
      label: 'User Repository',
      class: 'address book icon',
      canActivate: isAuthenticated
    }]*/

    this._topMenus = [
      {
        path: 'admin',
        label: 'Administration',
        class: 'desktop icon',
        canActivate: isAuthenticated
      }
    ]
  }

  get topMenus():Menus { return this._topMenus.filter(menu => {
    if(menu.canActivate) return menu.canActivate()
    return true
  }) }
}
