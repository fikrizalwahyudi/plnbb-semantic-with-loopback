import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-mitra',
  templateUrl: './mitra.component.html',
  styleUrls: ['./mitra.component.css']
})
export class MitraComponent implements OnInit {
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
