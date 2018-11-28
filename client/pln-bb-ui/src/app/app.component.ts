import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/lb.config';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    LoopBackConfig.setBaseURL(environment.apiUrl);
    LoopBackConfig.setApiVersion('api');
    LoopBackConfig.isHeadersWhereSet = () => false;
  }

  title = 'app';
}
