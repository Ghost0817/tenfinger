import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { distinctUntilChanged } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-type-race',
  templateUrl: './type-race.component.html',
  styleUrls: ['./type-race.component.scss']
})
export class TypeRaceComponent implements OnInit {

  isAuthenticated:boolean = false;
  wallOfFame: any;

  currLng = "MONGOLIAN";

  constructor(private meta: Meta,private api: ApiService,private userService: UserService) {


    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      this.isAuthenticated = isAuth
    })
  }

  ngOnInit(): void {
  }

  getCategory(langauge: string) {
    this.currLng = langauge;

    if(langauge=="MONGOLIAN") {
    }
    if(langauge=="ENGLISH") {
    }
  }

}
