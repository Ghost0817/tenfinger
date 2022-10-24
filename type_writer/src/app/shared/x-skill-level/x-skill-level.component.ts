import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-skill-level',
  templateUrl: './x-skill-level.component.html',
  styleUrls: ['./x-skill-level.component.scss']
})
export class XSkillLevelComponent {
  
  @Input() isAuthenticated:boolean = false;

  constructor() { }

}
