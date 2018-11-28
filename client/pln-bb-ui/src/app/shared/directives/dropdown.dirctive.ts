import { Directive, ElementRef } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[uiDropDown]'
})
export class DropdownDirective {

  constructor(private el:ElementRef) { 
    
  }

  ngOnInit() {
	  $(this.el.nativeElement).dropdown();
  }

}
