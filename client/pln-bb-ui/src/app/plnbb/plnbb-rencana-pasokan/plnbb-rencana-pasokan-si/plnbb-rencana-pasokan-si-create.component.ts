import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plnbb-rencana-pasokan-si-create',
  template: `
    <app-plnbb-rencana-pasokan-si (save)="save($event)"></app-plnbb-rencana-pasokan-si>
  `,
  styles: []
})
export class PlnbbRencanaPasokanSiCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
