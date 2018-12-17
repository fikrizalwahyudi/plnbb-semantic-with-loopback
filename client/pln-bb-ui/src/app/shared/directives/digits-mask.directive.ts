import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][uiDigitsMask]',
})
export class DigitsMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
		//console.log(event)

    //let newVal = event.replace(/\D/g, '');
    //if (backspace && newVal.length <= 6) {
    //  newVal = newVal.substring(0, newVal.length - 1);
		//}
		let newVal:string = event

    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length == 1) {
      newVal = `00${newVal}`;
    } else if (newVal.length == 2) {
      newVal = `0${newVal}`;
    } else if (newVal.length > 3) {
      newVal = newVal.substring(0, 3);
    } else {
      
		}
		
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}