import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-register-box',
  templateUrl: './x-register-box.component.html',
  styleUrls: ['./x-register-box.component.scss']
})
export class XRegisterBoxComponent implements OnInit {

  @Input() isAuthenticated:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
