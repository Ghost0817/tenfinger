import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {

  upgradeData: any = [{
    id: 'GOLD',
    conditionTerm: '1',
    price: '30,000',
    featured: '1',
    conditionOne: '16 Premium Lessons',
    conditionTwo: 'Priority mail support',
    conditionThree: '-'
  },{
    id: 'PLATINUM',
    conditionTerm: '',
    price: '50,000',
    featured: '1',
    conditionOne: '16 Premium Lessons',
    conditionTwo: 'Priority mail support',
    conditionThree: '-'
  },{
    id: 'SILVER',
    conditionTerm: '1',
    price: '14.99',
    featured: '1',
    conditionOne: '16 Premium Lessons',
    conditionTwo: 'Priority mail support',
    conditionThree: '-'
  }];

  currUpgrade: any = {id: '',conditionTerm: '',price: '',featured: '',conditionOne: '',conditionTwo: '',conditionThree: ''};

  showPayInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getConditionTerm(obj: any): string{
    let resultStr = '';
    if(obj.conditionTerm) {
      resultStr = obj.conditionTerm + ' year';
    } else {
      resultStr = 'lifetime';
    }

    return resultStr;
  }

  setCurrUpgrade(obj: any): void {
    this.currUpgrade = obj;
    this.showPayInfo = true;
  }

}
