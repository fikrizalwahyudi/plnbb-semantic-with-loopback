import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'table-action-delete',
  template: `
    <a href="javascript:void(0)" (click)="delete()"><i class="trash link icon action-icon"></i></a>
  `,
  styles: []
})
export class TableActionDeleteComponent implements OnInit {
  @Input() item

  @Output('delete') onDelete = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.item)
  }

}
