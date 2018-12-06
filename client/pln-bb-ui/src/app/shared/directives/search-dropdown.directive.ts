import { Directive, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import * as _ from 'lodash';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $:any;

@Directive({
	selector: '[uiSearchDropdown]',
	providers: [
		{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchDropdownDirective),
      multi: true
    }
	]
})
export class SearchDropdownDirective implements ControlValueAccessor {

	@Input() url:string;
	@Input() filter:any;

	@Output() onSearch = new EventEmitter();

	model:any;
	propagateChange:any;

  constructor(private el:ElementRef) { 
    
  }

  ngOnInit() {
		$(this.el.nativeElement).dropdown({
			forceSelection: false,
			apiSettings: {
				//url: `http://localhost:3000/api/OrganizationalUnits?filter=${JSON.stringify(this.filter)}`,
				url: `${this.url}?filter=${JSON.stringify(this.filter)}`,
				onResponse: (response) => {
					var tmp:any = {};
					const cb = (instances) => {
						tmp = instances
					}

					this.onSearch.emit({response, cb})

					if(this.model) {
						// has this value on results?
						const index = tmp.results.findIndex(rs => rs.value == this.model.value)
						if(index > -1) {
							tmp.results[index].selected = true
						} else {
							tmp.results.unshift(this.model)
						}
					}

					return tmp
				},
				cache: false
			},
			onChange: (value, text, $choice) => {
				if(this.propagateChange)
					this.propagateChange({
						name: text,
						value: value
					})
			}
		});
	}
	
	writeValue(obj: any): void {
		if(obj) {
			if((typeof obj) === 'string')
				this.model = {
					name: obj,
					value: obj
				}
			else
				this.model = obj
			this.model.selected = true

			$(this.el.nativeElement).dropdown('change values', [this.model])
		} else
			this.model = undefined
	}
	registerOnChange(fn: any): void {
		this.propagateChange = fn
	}
	registerOnTouched(fn: any): void {
		
	}
	setDisabledState?(isDisabled: boolean): void {
		
	}

}
