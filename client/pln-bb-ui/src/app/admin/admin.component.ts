import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: string = 'dashboard';
  constructor(private route: ActivatedRoute) {
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
    this.route.params.subscribe(params => {      
       if(params["id"]){
          this.id = params["id"];
       }
    })
  }

  onSelect(dummy: string) {
    this.id = dummy;
    console.log(dummy);
  }

}
