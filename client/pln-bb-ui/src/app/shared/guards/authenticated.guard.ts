import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CacheService } from '../services/cache.service';
import { UserApi } from '../sdk/services/custom/User';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

	constructor(
		private router:Router, 
		private cache:CacheService,
		private userApi:UserApi
	) {

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
		if(this.userApi.isAuthenticated()) 
			return true
		
		this.router.navigate(['login'])

		return false

		//let user = this.cache.db.get('user')
	
		//if(user) return true
		
		//this.router.navigate(['login'])
	}
	
}