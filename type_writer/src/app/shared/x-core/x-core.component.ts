import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'x-core',
  template: ``,
  styleUrls: ['./x-core.component.scss']
})
export class XCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'x-field-errors',
  template: `
    <ng-container *ngIf="formField?.dirty">
      <span class="field-error" *ngIf="formField?.hasError('required')">
          This is a required field.
      </span>
      <span class="field-error" *ngIf="formField?.hasError('email')">
          Email format is invalid.
      </span>
      
      <span class="field-error" *ngIf="formField?.hasError('minlength')">
          This field at least {{formField.errors?.['minlength'].requiredLength}} characters.
      </span>

      <span class="field-error" *ngIf="formField?.hasError('maxlength')"> 
          This field max {{formField.errors?.['maxlength'].requiredLength}} characters.
      </span>

      <span class="field-error" *ngIf="formField?.hasError('validateUniqueness')">
          {{formField.errors?.['message']}}
      </span>

      <span class="field-error" *ngIf="formField?.hasError('passwordStrength')"> 
          Your password must have lower case, upper case and numeric characters.
      </span>

    </ng-container>
    <ng-container *ngIf="!formField?.dirty">
      <span class="field-error">&nbsp;</span>
    </ng-container>
  `,
  styles: ['.field-error{display: block;width: 100%;margin-top: 0.25rem;font-size: .875em;color: #dc3545;}']
})
export class XFieldErrorsComponent {

  @Input()
  public formField!: FormControl;

  constructor() { }

}
