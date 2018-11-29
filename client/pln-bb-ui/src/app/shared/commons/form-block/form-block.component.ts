import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.sass']
})
export class FormBlockComponent implements OnInit {

  @Input() title
  @Input() submitting
  @Input() errorMsg

  constructor() { }

  ngOnInit() {
  }

}
