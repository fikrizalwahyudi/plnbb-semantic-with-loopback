import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { LogService } from './log.service';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

export interface BreadCrumb {
	label: string;
	url: string;
}

@Injectable()
export class BreadcrumbService {

  private breadcrumbs$:Observable<BreadCrumb[]>;
  private log

	constructor(private router:Router, private activatedRoute:ActivatedRoute, private logService:LogService) { 
    this.log = this.logService.logger
		this.log.info('initiate breadcrumb service')

    this.breadcrumbs$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(distinctUntilChanged()).pipe(map(event => {
      return this.buildBreadCrumb(this.activatedRoute.root)
    }))
	}

	get breadcrumbs() { return this.breadcrumbs$ }

	buildBreadCrumb(route: ActivatedRoute, url: string = '', 
                breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    //If no routeConfig is avalailable we are on the root path
		let path = ''
		if(route.routeConfig) {
			route.url.subscribe(segments => {path = segments.map(segment => segment.path).join('/')})
		}
    
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time
    const nextUrl = `${url}${path}/`;

    if(route.routeConfig && !route.routeConfig.data) {
      if(route.firstChild)
        return this.buildBreadCrumb(route.firstChild, nextUrl, breadcrumbs);
      else
        return breadcrumbs
    }

    const label = route.routeConfig ? route.routeConfig.data[ 'breadcrumb' ] : 'Root';

    const breadcrumb = {
        label: label,
        url: nextUrl
    };
    const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
    if (route.firstChild) {
        //If we are not on our current path yet, 
        //there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}