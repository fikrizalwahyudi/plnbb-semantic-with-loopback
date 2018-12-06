import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $:any;

@Directive({
  selector: '[uiMultiDropdown]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiDropdownDirective),
      multi: true
    }
  ]
})
export class MultiDropdownDirective implements ControlValueAccessor {

  @Input() values

  writeValue(obj: any): void {
    if(obj) {
      this.tags = []
      obj.forEach(tag => {
        $(this.el.nativeElement).dropdown('set selected', tag)
      })
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  tags:string[] = [];
  propagateChange:any = undefined;

  constructor(private el:ElementRef) { 
  
  }

  ngOnInit() {
    let props = {
      onAdd: (value, text, $selected) => {
        console.log(value);
        
        this.tags.push(value);
        if(this.propagateChange)
          this.propagateChange(this.tags);
      },
      onRemove: (value, text, $selected) => {
        this.tags = this.tags.filter(t => t !== value);
        if(this.propagateChange)
          this.propagateChange(this.tags);
      }
    }

    if(this.values) {
      //props['values'] = this.values
      this.values.subscribe(vals => {
        props['values'] = vals
        props['placeholder'] = 'Select Roles'

        $(this.el.nativeElement).dropdown(props);
      })
    } else {
      $(this.el.nativeElement).dropdown(props);
    }
  }

}
