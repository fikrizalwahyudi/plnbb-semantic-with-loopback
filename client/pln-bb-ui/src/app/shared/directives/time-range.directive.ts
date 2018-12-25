import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from 'lodash'
import * as moment from 'moment';

declare var $:any;

@Directive({
  selector: '[uiTimeRange]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeRangeDirective),
      multi: true
    }
  ]
})
export class TimeRangeDirective implements ControlValueAccessor {

	@Input() startCalendar
	@Input() endCalendar

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
		let opts:any = {
      type: 'datetime',
      onChange: (date, text, mode) => {
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
		}
		
		if(this.startCalendar)
			opts.startCalendar = $(this.startCalendar)
		else if(this.endCalendar)
			opts.endCalendar = $(this.endCalendar)

	  $(this.el.nativeElement).calendar(opts);
  }

}