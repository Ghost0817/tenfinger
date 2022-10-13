import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
hide = true;
  regForm!: FormGroup;

  constructor(private http: HttpClient,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      username: new FormControl(
      'sainaa',
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
      ]}),
      password: new FormControl(
        'foo',
        {
          validators: [
            Validators.required,
            Validators.maxLength(120)
        ]})
    });
  }

  getError() {
    return false;
  }
  
  getGrade() {
    return false;
  }

  login() {
    const body = {
      username: this.regForm.value['username'],
      password: this.regForm.value['password']
    }
    this.http.post(`${environment.api_url}/authenticate`, body).subscribe((res: any) => {
      localStorage.setItem('accessToken', res['jwt']);
      this.userService.populate()
      setTimeout(()=>{
        this.router.navigateByUrl('/student/lesson');
      }, 300)
    })
  }

}
