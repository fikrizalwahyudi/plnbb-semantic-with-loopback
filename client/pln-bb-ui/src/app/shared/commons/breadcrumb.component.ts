import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BreadCrumb, BreadcrumbService } from '../services/breadcrumb.service';


@Component({
  selector: 'ui-breadcrumb',
  template: `
    <div class="ui breadcrumb mb-1">
      <ng-container *ngFor="let breadcrumb of breadcrumbs$; let last = last">
        <a *ngIf="!last" [routerLink]="[breadcrumb.url]" class="section">{{breadcrumb.label}}</a>
        <i *ngIf="!last" class="right angle icon divider"></i>

        <div *ngIf="last" class="active section">{{breadcrumb.label}}</div>
      </ng-container>
    </div>
  `,
  styles: []
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs$:BreadCrumb[];

  constructor(private service:BreadcrumbService) { 
    service.breadcrumbs.subscribe(bc => this.breadcrumbs$ = bc)
  }

  ngOnInit() {
    
  }
}
