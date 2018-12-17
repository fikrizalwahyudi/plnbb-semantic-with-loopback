import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[uiDropDown]'
})
export class DropdownDirective {

  @Input() values
  @Input() placeholder

  @Output('select') onChange = new EventEmitter()

  constructor(private el:ElementRef) { 
    
  }

  ngOnInit() {
    if(this.values) {
      this.values.subscribe(vals => {
        $(this.el.nativeElement).dropdown({
          values: vals,
          placeholder: this.placeholder,
          onChange: (value, text, $choice) => {
            //console.log(value)
            this.onChange.emit(value)
          }
        });
      })
    }
    else $(this.el.nativeElement).dropdown();
  }

}
