import { Component, Input, OnInit, Output } from '@angular/core';

type MsgType = 'default' |'info'|'success'| '';

@Component({
  selector: 'x-messages',
  templateUrl: './x-messages.component.html',
  styleUrls: ['./x-messages.component.scss']
})
export class XMessagesComponent implements OnInit {

  @Input()
  msgType!: MsgType;
  
  @Input()
  setIcon!: String;

  @Input()
  msgText!: String;

  @Input()
  @Output()
  disbaleMessage: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: Event) { 
    if (!this.disbaleMessage) { this.disbaleMessage = true; }
  } 

}
