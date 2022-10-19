import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-hall-of-fame',
  templateUrl: './x-hall-of-fame.component.html',
  styleUrls: ['./x-hall-of-fame.component.scss']
})
export class XHallOfFameComponent implements OnInit {

  @Input() wallOfFame: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
