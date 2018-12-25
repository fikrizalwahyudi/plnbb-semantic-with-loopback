import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-form-block-basic',
  template: `
    <ng-content select=".form-header"></ng-content>
    <div class="ui attached negative message segment" *ngIf="errorMsg">
      <div class="header">
        Oopss... somethings wrong!!!
      </div>
      <p>
        {{errorMsg}}
      </p>
    </div>
    <div class="ui bottom attached yellow segment with-border-bottom">
      <div class="ui active dimmer" *ngIf="submitting">
        <div class="ui loader"></div>
      </div>
      <ng-content select=".form-content"></ng-content>
    </div>
  `,
  styles: []
})
export class FormBlockBasicComponent implements OnInit {

  @Input() submitting
  @Input() errorMsg

  constructor() { }

  ngOnInit() {
  }

}
