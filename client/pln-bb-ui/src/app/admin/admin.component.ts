import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
