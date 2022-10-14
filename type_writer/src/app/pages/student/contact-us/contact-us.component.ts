import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  isAuthenticated:boolean = false;
  wallOfFame: any;

  contactForm!: FormGroup;
  token: string|undefined;

  constructor(private http: HttpClient,private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('',{
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ]
      }),
      email: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(40),
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]}),
        body: new FormControl('',{
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(500)
          ]
        }),
        recaptcha: new FormControl(
          '',
          {
            validators: [
              Validators.required,
          ]})
    });
  }

  get recaptchaField () {
    return this.contactForm.get('recaptcha');
  }

  onSubmit(event: any) {
    if (this.contactForm.invalid) {
      for (const control of Object.keys(this.contactForm.controls)) {
        this.contactForm.controls[control].markAsTouched();
      }
      return;
    }

    const body = {
      email: this.contactForm.value['email'],
    }
    this.http.post(`${environment.api_url}/contactus`, body).subscribe(
      (res: any) => {

      }
    );
  }

}
