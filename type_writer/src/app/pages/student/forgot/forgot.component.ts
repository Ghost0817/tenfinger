import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  regForm!: FormGroup;
  token: string|undefined;

  showSuccessPage: boolean = false;

  constructor(private http: HttpClient,private router: Router,private fb: FormBuilder) {
    this.token = undefined;
  }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      email: new FormControl(
        'Sainzaya@example.com',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]}),
        recaptcha: new FormControl(
          '',
          {
            validators: [
              Validators.required,
          ]})
    });
  }

  get emailField () {
    return this.regForm.get('email');
  }
  get recaptchaField () {
    return this.regForm.get('recaptcha');
  }

  

  onSubmit(event: any) {
    if (this.regForm.invalid) {
      for (const control of Object.keys(this.regForm.controls)) {
        this.regForm.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
    // TODO: Use EventEmitter with form value
    const body = {
      email: this.regForm.value['email'],
    }
    this.http.post(`${environment.api_url}/forgot`, body).subscribe(
      (res: any) => {

        this.showSuccessPage = true;
      }
    );
  }

}
