import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigateByUrl('/student/login');
  }

}
