import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { distinctUntilChanged } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserService } from 'src/app/core/services/user.service';

// Create a type that accepts either the string 'light' or 'dark' only
type Theme = 'default' |'techy-dark'|'coffee-break'|'under-the-sea'|'huge-tree'| 'scary-monster';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {
  // Default to 'light' theme
  currentTheme: Theme = 'default';

  isAuthenticated:boolean = false;
  wallOfFame: any;

  constructor(@Inject(DOCUMENT) private document: Document,private meta: Meta,private api: ApiService,private userService: UserService) {
    this.document.body.classList.add(this.currentTheme);

    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      this.isAuthenticated = isAuth
    })
    
  }

  ngOnInit(): void {
  }

  setThemeName(newTheme: Theme):void {
    localStorage.setItem('prefers-becheech-theme-name', newTheme);
    this.document.body.classList.replace(this.currentTheme, newTheme)
    this.currentTheme = newTheme;
  }

}
