import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from 'src/app/core/validators/createPasswordStrengthValidator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  regForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      newpassword: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120),
            createPasswordStrengthValidator()
        ]}),
    newre_password: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(120)
      ]})
    });
  }

  
  onSubmit(event: any) {
    if (this.regForm.invalid) {
      for (const control of Object.keys(this.regForm.controls)) {
        this.regForm.controls[control].markAsTouched();
      }
      return;
    }
  }

}
