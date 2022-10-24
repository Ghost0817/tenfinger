import { Component, forwardRef, Input, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { XFieldErrorsComponent } from '../x-core/x-core.component';


@Component({
  selector: 'x-input',
  template: `
  <div class="form-row">
    <div class="input-group">
        <label class="form-label" [for]="fieldName">{{ formLabel }}</label>
        
        <input class="form-control" [value]="value"
          [ngClass]="{'has-error': formField.invalid && (formField.dirty || formField.touched)}"
          [disabled]="isDisabled"
          (input)="changed($any($event).target.value)"
          (blur)="touched"
          (id)="fieldName"
          (name)="fieldName"
          [type]="fieldType"
          (max)="fieldMax"
          (min)="fieldMin"
          (step)="fieldStep"
          (style)="fieldStyle"
          (pattern)="fieldPattern"
          (placeholder)="fieldPlaceholder"
          >

          <x-field-errors [formField]="formField"></x-field-errors>
      </div>
  </div>
  `,
  styleUrls: ['./x-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> XInputComponent),
      multi: true
    }
  ]
})
export class XInputComponent implements ControlValueAccessor {

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public fieldType!: string;

  @Input()
  public fieldMax!: number;

  @Input()
  public fieldMin!: number;

  @Input()
  public fieldStep!: number;

  @Input()
  public fieldStyle!: string;

  @Input()
  public fieldPattern!: string;

  @Input()
  public fieldPlaceholder: string | "" | undefined;

  @Input()
  public formLabel!: string;

  @Input('ngModel')
  public value: string | "" | undefined;

  public changed!: (value: string) => void;

  public touched!: () => void;

  public isDisabled!: boolean;

  constructor() { }

  get formField  (): FormControl {
    // @ts-ignore
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
    this.touched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
    this.isDisabled = isDisabled;
  }

}



@Component({
  selector: 'x-select',
  template: `
  <div class="form-row">
    <div class="input-group">
        <label class="form-label" [for]="fieldName">{{ formLabel }}</label>

        <select
          (id)="fieldName"
          (name)="fieldName" [value]="value" class="form-select" aria-label="Default select example">
          <option *ngFor="let item of choices; let i = index" value="{{ item[getKey(item, i)] }}">{{ getKey(item, i) }}</option>
        </select>
        
    </div>
  </div>
  `,
  styleUrls: ['./x-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> XSelectComponent),
      multi: true
    }
  ]
})

export class XSelectComponent implements ControlValueAccessor {

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public formLabel!: string;

  @Input()
  public choices: any;

  public value: any | "";

  public changed!: (value: string) => void;

  public touched!: () => void;

  public isDisabled!: boolean;

  constructor() { }

  get formField  (): FormControl {
    // @ts-ignore
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
    this.touched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
    this.isDisabled = isDisabled;
  }

  getKey(obj: Object, i: number) {
    var j = 0;
    for (var p in obj) {
      if (j+i == i) { 
        return p;
      }
    }
    return '';
  }

}






@Component({
  selector: 'x-radio',
  template: `
  <div class="form-row">
    <div class="input-group">
      <label class="form-label" [for]="fieldName">{{ formLabel }}</label>
      <ng-template  *ngFor="let item of choices; let i = index">
        <div class="form-check">
          <input class="form-check-input" [value]="value"
            [disabled]="isDisabled"
            (blur)="touched"
            (id)="fieldName"
            (name)="fieldName"
            [type]="fieldType"
            (style)="fieldStyle"
            >
          <label class="form-check-label" [for]="fieldName">{{item.key}}</label>
        </div>
      </ng-template>
      
      <input class="form-control" [value]="value"
        [ngClass]="{'has-error': formField.invalid && (formField.dirty || formField.touched)}"
        [disabled]="isDisabled"
        (blur)="touched"
        (id)="fieldName"
        (name)="fieldName"
        [type]="fieldType"
        (style)="fieldStyle"
        >

        <x-field-errors [formField]="formField"></x-field-errors>
    </div>
  </div>
  `,
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> XRadioboxComponent),
      multi: true
    }
  ]
})
export class XRadioboxComponent implements ControlValueAccessor {

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public fieldType!: string;

  @Input()
  public fieldStyle!: string;

  @Input()
  public formLabel!: string;

  @Input()
  public choices!: any;

  public value: string | "" | undefined;

  public changed!: (value: string) => void;

  public touched!: () => void;

  public isDisabled!: boolean;

  constructor() { }

  get formField  (): FormControl {
    // @ts-ignore
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
    this.touched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
    this.isDisabled = isDisabled;
  }

  getKey(obj: Object, i: number) {
    var j = 0;
    for (var p in obj) {
      if (j+i == i) { 
        return p;
      }
    }
    return null;
  }

}

@Component({
  selector: 'x-form',
  template: ``,
  styleUrls: ['./x-form.component.scss']
})
export class XFormComponent {

  constructor() { }

}
