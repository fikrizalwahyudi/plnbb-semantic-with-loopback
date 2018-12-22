import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/lb.config';
import { environment } from '../environments/environment';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  loadingRouteConfig:boolean = false

  constructor(private router:Router) {
    LoopBackConfig.setBaseURL(environment.apiUrl);
    LoopBackConfig.setApiVersion('api');
    LoopBackConfig.isHeadersWhereSet = () => false;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true
      } else if(event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false
      }
    })
  }

  title = 'app';
}
