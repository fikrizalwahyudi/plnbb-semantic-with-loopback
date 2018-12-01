import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-plnbb',
  templateUrl: './plnbb.component.html',
  styleUrls: ['./plnbb.component.css']
})
export class PlnbbComponent implements OnInit {
  id: string = 'dashboard';
  constructor() {
    $(document)
      .ready(function () {
        $('.ui.menu .ui.dropdown').dropdown({
          on: 'hover'
        });
        $('.ui.menu a.item')
          .on('click', function () {
            $(this)
              .addClass('active')
              .siblings()
              .removeClass('active');
          });
      });
  }

  ngOnInit() {
  }

  onSelect(dummy: string) {
    this.id = dummy;
    console.log(dummy);
  }

}
