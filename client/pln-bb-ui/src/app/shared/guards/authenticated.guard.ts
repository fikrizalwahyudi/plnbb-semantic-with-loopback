import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CacheService } from '../services/cache.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

	constructor(private router:Router, private cache:CacheService) {

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
		let user = this.cache.db.get('user')
	
		if(user) return true
		
		this.router.navigate(['login'])
	}
	
}