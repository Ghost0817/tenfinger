import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { distinctUntilChanged } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {

  isAuthenticated:boolean = false;
  wallOfFame: any;

  constructor(private meta: Meta,private api: ApiService,private userService: UserService) {

    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      this.isAuthenticated = isAuth
    })
    
  }

  ngOnInit(): void {
  }

  setThemeName(themeName: String):void {

  }

}
