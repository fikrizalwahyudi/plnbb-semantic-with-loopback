import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';
import * as _ from 'lodash';

declare var $:any;

@Directive({
  selector: '[uiCalendar]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarDirective),
      multi: true
    }
  ]
})
export class CalendarDirective implements ControlValueAccessor {

  propagateChange:any = undefined;

  writeValue(obj: any): void {
    if(obj) {
      $(this.el.nativeElement).calendar('set date', obj)
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  constructor(private el:ElementRef) { 
    
  }

  ngOnInit() {
	  $(this.el.nativeElement).calendar({
      type: 'date',
      onChange: (date, text, mode) => {
        //console.log(date instanceof Date)
        if(this.propagateChange)
          this.propagateChange(date)
      },
      parser: {
				date: (text, settings) => {
					if(_.isEmpty(text))
						return null

					let tmp = moment(text)

					return tmp.toDate()
				}
			}
    });
  }

}
