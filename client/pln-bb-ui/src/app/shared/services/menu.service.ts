import { Injectable } from '@angular/core';
import { UserApi } from '../sdk/services/custom/User';
import { User } from '../sdk';

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

    this.accountApi.getCurrent({include: {principals: 'role'}}).subscribe(data => {
      // console.log(data)
      let currentUser = data as User

      const isAuthorized = (role) => {
        let index = currentUser.principals.findIndex(principal => principal.role.name === role)

        if(index > -1) return true

        return false
      }

      this._topMenus = [
        {
          path: 'admin',
          label: 'Administration',
          class: 'desktop icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('admin')}]
        },
  
        {
          path: 'mitra',
          label: 'Mitra Batubara',
          class: 'cogs icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('mitrabatu')}]
        },
  
        {
          path: 'transport',
          label: 'Mitra Transport',
          class: 'ship icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('mitratransport')}]
        },
  
        {
          path: 'plnbb',
          label: 'PLN BB',
          class: 'university icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('plnbb')}]
        },
  
        {
          path: 'management',
          label: 'Management',
          class: 'book icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('management')}]
        },

        {
          path: 'dirop',
          label: 'Direktur Operasi',
          class: 'briefcase icon',
          canActivate: [isAuthenticated, () => {return isAuthorized('dirop')}]
        }
      ]
    })
  }

  get topMenus():Menus { return this._topMenus.filter(menu => {
    if(menu.canActivate && Array.isArray(menu.canActivate)) {
      //return menu.canActivate()

      let result = true
      menu.canActivate.forEach(fn => result = result && fn())

      return result
    }
    else if(menu.canActivate) return menu.canActivate()
    return true
  }) }
}
