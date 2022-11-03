import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-dialog',
  templateUrl: './x-dialog.component.html',
  styleUrls: ['./x-dialog.component.scss']
})
export class XDialogComponent {
  
  @Input()
  isClose:boolean = false;
  
  @Input()
  hasBgLayout:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  onOverlayClicked(evt: MouseEvent): void {

  }

  onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }

}
