import { Directive, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var $:any;

@Directive({
  selector: '[uiAsyncDropdown]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AsyncDropdownDirective),
      multi: true
    }
  ]
})
export class AsyncDropdownDirective implements ControlValueAccessor {

  @Input() values
  @Input() placeholder

  @Output('select') onChange = new EventEmitter()

	propagateChange
	selected

  constructor(private el:ElementRef) { 
    //console.log('async drospdown initiated')
  }

  ngOnInit() {
		$(this.el.nativeElement).dropdown({
			forceSelection: false,
			apiSettings: {
				responseAsync: (settings, callback) => {
					//console.log(settings)
					this.values(settings.urlData.query).subscribe(data => {
						//console.log(data)
						callback({
							success: true,
							results: data.filter(entry => {
								if(entry.value === this.selected.value)
									entry.selected = true
								//console.log(entry)
								return entry
							})
						})
					})
				},
				cache: false
			},
			onResponse: (response) => {
				//console.log(response)

				return response
			},
			onChange: (value, text, $choice) => {
				if(this.propagateChange)
					this.propagateChange({
						name: text,
						value: value
					})

				this.onChange.emit(value)
			}
		})
	}
	
	writeValue(obj: any): void {
		//console.log(obj)
		if(obj) {
			this.selected = obj
			obj.selected = true
      $(this.el.nativeElement).dropdown('change values', [obj])
    }
	}
	
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
	}
	
  registerOnTouched(fn: any): void {
    
	}
	
  setDisabledState?(isDisabled: boolean): void {
    
  }

}