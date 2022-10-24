import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-messages',
  templateUrl: './x-messages.component.html',
  styleUrls: ['./x-messages.component.scss']
})
export class XMessagesComponent implements OnInit {

  @Input()
  msgType!: String;
  
  @Input()
  setIcon!: String;

  @Input()
  msgText!: String;
  disbaleMessage: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: Event) { 
    if (!this.disbaleMessage)
      this.disbaleMessage = true
  } 

}
