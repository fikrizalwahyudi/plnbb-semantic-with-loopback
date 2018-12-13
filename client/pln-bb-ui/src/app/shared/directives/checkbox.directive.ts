import { Directive, ElementRef } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[uiCheckbox]'
})
export class CheckboxDirective {

  constructor(private el:ElementRef) { 
    $(this.el.nativeElement).checkbox();
  }

}
