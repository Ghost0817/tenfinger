import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { distinctUntilChanged } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  isAuthenticated:boolean = false;
  wallOfFame: any;
  
  currentUser: any;
  cateroties: any = [];
  lessons: any = [];
  curr_cate: any = [];
  currLng = "MONGOLIAN";

  constructor(private meta: Meta,private api: ApiService,private userService: UserService) {
    this.meta.addTag({ name: 'keywords', content: '10 finger typing, ten finger typing, typing fast with ten finger, ten finger exercises, bicheech.com, bicheech, typing' });
    this.meta.addTag({ name: 'description', content: 'An online application for typing fast with ten fingers.' });

    this.api.get('/lesson').subscribe(response => {
      this.curr_cate = response;
      this.lessons = response;
      this.cateroties = response.filter(function(data: any) {
        return data.categoryParent == 17;
      });
    });

    this.api.get('/wall-of-fame').subscribe(response => {
      this.wallOfFame = response;
    });

    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      this.isAuthenticated = isAuth
    });
    this.userService.currentUser.pipe(distinctUntilChanged()).subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
  }

  showContent() {

  }

  getLessons(category: any) {
    console.log(category);
    this.lessons = this.curr_cate.filter(function(data: any) {
      return data.categoryParent == category;
    });
  }
  
  getCategory(langauge: string) {
    this.currLng = langauge;

    if(langauge=="MONGOLIAN") {
      this.cateroties = this.curr_cate.filter(function(data: any) {
        return data.categoryParent == 17;
      });
    }
    if(langauge=="ENGLISH") {
      this.cateroties = this.curr_cate.filter(function(data: any) {
        return data.categoryParent == 18;
      });
    }
  }

}
