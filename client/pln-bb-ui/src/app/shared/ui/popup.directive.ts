import { Directive, ElementRef } from '@angular/core';
//import * as $ from 'jquery'

declare var $:any;

@Directive({
  selector: '[uiPopup]'
})
export class PopupDirective {

  constructor(private el:ElementRef) { 
    
    //console.log('initiate token field')
    //const jEl:any = $(el.nativeElement);
    //jEl.tokenfield();
    //console.log();
    $(el.nativeElement).popup({
			hoverable: true,
			position: 'top center'
		})
  }

}