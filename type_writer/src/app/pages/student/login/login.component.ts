import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  regForm!: FormGroup;
  respError: any = {status: "200", message: "", showup: false};

  constructor(private http: HttpClient,
    private router: Router,
    private userService: UserService) {
      
    }

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
    if(this.respError['status'] !== "200")
      return true
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
      this.respError.status = "200";
      this.respError.show = true;
      this.userService.populate()
      setTimeout(()=>{
        this.router.navigateByUrl('/student/lessons');
      }, 300)
    },
    (err) => {
      if(err.status == 401) {
        this.respError.status = "401";
        this.respError.message = "Хэрэглэгчийн нэр болон нууц үг буруу байна.";
        this.respError.show = true;
      }
      if(err.status == 404) {
        
      }
      // if (err.error.message == 'TokenExpiredError') {
      //   //this.loggedIn = false;
      //   //DO.. try refresh token. if refreshed: this.loggedIn = true
      // } else {
      //   // for any other errors:
      //   //this.loggedIn = false;
      // }
    });

  }

}
