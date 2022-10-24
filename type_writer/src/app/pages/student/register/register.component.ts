import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkUniquenessValidator } from 'src/app/core/validators/checkUniquenessValidator';
import { createPasswordStrengthValidator } from 'src/app/core/validators/createPasswordStrengthValidator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public regForm!: FormGroup;
  public grade!: any;
  public isPosted!: boolean | false;


  public passwordType: string = 'password';
  
  constructor(private http: HttpClient,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          checkUniquenessValidator(),
      ]}),
      password: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120),
            createPasswordStrengthValidator()
        ]}),
      re_password: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]}),
      email: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]})
    });
    // this.regForm.reset();
    // this.regForm.controls['username'].setErrors(null);
    // this.regForm.controls['email'].setErrors(null);
    // this.regForm.controls['password'].setErrors(null);
    // this.regForm.controls['re_password'].setErrors(null);
  }

  onSubmit(event: any) {
    // TODO: Use EventEmitter with form value
    const body = {
      username: this.regForm.value['username'],
      email: this.regForm.value['email'],
      password: this.regForm.value['password'],
      re_password: this.regForm.value['re_password']
    }

    this.http.post(`${environment.api_url}/register-student`, body).subscribe(
      (res: any) => {
      if(res['valid'] != undefined && res['valid'] == false) {
        for (var _i = 0; _i < res['errors'].length; _i++) {
          //this.regForm.get(res['errors'][_i]['field']).setErrors({validateUniqueness: true, message: res['errors'][_i]['message']});
          //this.regForm.get(res['errors'][_i]['field']).markAsTouched();
          //this.regForm.get(res['errors'][_i]['field']).markAsDirty();
        }
      }
      if(res['valid'] == true) {
        this.isPosted = true
        this.regForm.reset();
        this.regForm.controls['username'].setErrors(null);
        this.regForm.controls['email'].setErrors(null);
        this.regForm.controls['password'].setErrors(null);
        this.regForm.controls['re_password'].setErrors(null);
      }
      //this.router.navigateByUrl('/student/login');
    });
  }

}
