import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-dialog',
  templateUrl: './x-dialog.component.html',
  styleUrls: ['./x-dialog.component.scss']
})
export class XDialogComponent {
  
  @Input()
  msgText: String | undefined;
  disbaleMessage: Boolean = false;

  constructor() { }

  handleClick(event: Event) { 
    if (!this.disbaleMessage)
      this.disbaleMessage = true
  } 

}
