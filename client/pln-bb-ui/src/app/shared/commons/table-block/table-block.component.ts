import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-table-block',
  templateUrl: './table-block.component.html',
  styleUrls: ['./table-block.component.sass']
})
export class TableBlockComponent implements OnInit {
  @Input()
  disableSearch:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
