import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  body = document.body;
  constructor() { }

  changeLight() {
    this.body.classList.replace('light', 'dark');
  }

  changeDark() {
    this.body.classList.replace('dark', 'light');
  }
}
