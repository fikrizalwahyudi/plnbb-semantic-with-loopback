import { Component, OnInit, Input, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Component({
  selector: '[ui-multi-input]',
  template: `
    <ng-content></ng-content>
    <div class="ui transparent input multi-input" [ngClass]="{'multi-input-active': tags.length > 0, 'multi-input-error': (control.invalid && (control.dirty || control.touched))}">
      <a class="ui label" *ngFor="let item of tags">{{item}}</a>
      <input type="text" name="contacts" placeholder="Enter Value" [(ngModel)]="model" (keyup.enter)="enter($event)" (keyup.backspace)="backspace($event)">
    </div>
  `,
  styles: [
    `.multi-input {
        border: 1px solid rgba(34,36,38,.15); 
        border-radius: 4px; 
        padding-bottom: 8px;
        padding-left: 14px; 
        padding-right: 14px;
        padding-top: 8px;
    }`,
    `.multi-input-active {
        padding-bottom: 5px;
        padding-top: 5px; 
    }`,
    `.multi-input-active a {
        margin-right: 5px; 
    }`,
    `.multi-input-error {
        background: #fff6f6;
        border-color: #e0b4b4;
    }`
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MultiInputComponent),
      multi: true
    }
  ]
})
export class MultiInputComponent implements OnInit, ControlValueAccessor, Validator {
  
  validate(c: AbstractControl): { [key: string]: any; } {
    this.control = c;
    
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error("Method not implemented.");
  }
  
  writeValue(obj: any): void {
    //throw new Error("Method not implemented.");
    if(obj) {
      this.tags = obj;
    } else {
      this.tags = [];
    }
  }
  registerOnChange(fn: any): void {
    //throw new Error("Method not implemented.");
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }

  model:string = '';
  tags:string[] = [];
  propagateChange:any = undefined;
  control:any = undefined;

  constructor(private el:ElementRef) { 
    //$(this.el.nativeElement).on
  }

  ngOnInit() {

  }

  onChange(event) {
    this.propagateChange(this.tags)
  }

  enter(e) {
    if(this.model === '') {
      return false;
    }

    this.tags.push(this.model.trim());
    this.model = '';

    this.propagateChange(this.tags)
  }

  backspace(e) {
    if(this.model.length == 0) {
      this.tags.pop();
    }

    if(this.tags.length == 0) {
      this.propagateChange(null)
    } else {
      this.propagateChange(this.tags)
    }
  }

}
