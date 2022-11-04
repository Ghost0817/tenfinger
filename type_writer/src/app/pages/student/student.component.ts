import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public isAuthenticated:boolean = false
  public currentUser: any
  public menu:any;

  constructor(private router: Router,
              private userService: UserService) {
    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      console.log(isAuth)
      this.isAuthenticated = isAuth
    });
    this.userService.currentUser.pipe(distinctUntilChanged()).subscribe(user => {
      console.debug(user);
      this.currentUser = user;
    });
    
    this.isAuthenticated = localStorage.getItem("accessToken")? true: false;
  }

  ngOnInit(): void {
  }

  logout(){
    //localStorage.removeItem('accessToken');
    this.userService.purgeAuth()
    this.router.navigateByUrl('/student/login');
  }

}
