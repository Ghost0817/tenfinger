import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  isAuthenticated:boolean = false;
  hallOfFameForm!: FormGroup;
  sreachData: any = [{"Overall":''},{"Fastest":'FAST'},{"Busiest":"BUSY"}]
  countryData: any = [{"Overall":''},{"Mongolia":'MN'}]
  ageData: any = [{"Overall":''},{"Male":'M'},{"Female":"F"},{"Age(1-19)":"01"},{"Age(20-39)":"20"},{"Age(40-69)":"40"},{"Age(69+)":"70"}]
  

  rowData: any = [{"userID":"4","userType":"Standard","username":"Temuulen","password":"","firstname":"Devonna3","lastname":"Saines","email":"dsainesd2@baidu.com","lastLogin":"2015-10-27 04:38:24","signupDate":"2015-10-27 04:38:24","gaGroupID":1,"class":"789456123"},{"userID":"1","userType":"Standard","username":"student1","password":"","firstname":"Big guy","lastname":"","email":"sainzaya.b@gmail.com","lastLogin":"2016-10-27 02:47:09","signupDate":"2015-10-23 05:25:22","gaGroupID":null,"class":"Ungrouped Students"},{"userID":"3","userType":"Standard","username":"setse","password":"","firstname":"","lastname":"","email":"setsenbilig@yahoo.com","lastLogin":"2015-10-26 14:23:40","signupDate":"2015-10-26 14:23:40","gaGroupID":null,"class":"Ungrouped Students"},{"userID":"5","userType":"Standard","username":"soko soko","password":"","firstname":"","lastname":"","email":"soko.ife@gmail.com","lastLogin":"2015-11-04 15:35:33","signupDate":"2015-11-04 15:35:33","gaGroupID":null,"class":"Ungrouped Students"},{"userID":"7","userType":"Standard","username":"toroo","password":"","firstname":"","lastname":"","email":"toroo.byamba@gmail.com","lastLogin":"2015-11-09 13:53:57","signupDate":"2015-11-09 13:53:57","gaGroupID":null,"class":"Ungrouped Students"},{"userID":"8","userType":"Standard","username":"baljaa","password":"","firstname":"","lastname":"","email":"baljaa_143@yahoo.com","lastLogin":"2015-11-10 00:33:34","signupDate":"2015-11-10 00:33:34","gaGroupID":null,"class":"Ungrouped Students"},{"userID":"9","userType":"Standard","username":"Baarinkhuu","password":"","firstname":"","lastname":"","email":"2403776740@QQ.com","lastLogin":"1970-07-08 11:00:00","signupDate":"2016-06-03 01:07:54","gaGroupID":null,"class":"Ungrouped Students"}];
  columnDefs: any = [
    { dataIndex: 'username',header:'Username',sortable: true},
    { dataIndex: 'firstname',header:'First Name',sortable: true},
    { dataIndex: 'lastname',header:'Last Name',sortable: true},
    { dataIndex: 'class',header:'Class',sortable: true},
    { dataIndex: 'email',header:'Email',sortable: true, hidden: true},
    { dataIndex: 'lastLogin',header:'Last Login',sortable: true, renderer: function() {}},
    { dataIndex: 'signupDate',header:'Date Enrolled',sortable: true},
    { dataIndex: 'userType',header:'Account Type',sortable: true},
    { dataIndex: 'view',header:'',sortable: true,menuDisabled: true,align: 'center',width: 30, fixed: true},
    { dataIndex: 'edit',header:'',sortable: true,menuDisabled: true,align: 'center',width: 30, fixed: true }
  ]

  wallOfFame: any;

  constructor(private api: ApiService,private userService: UserService) {

    this.userService.isAuthenticated.pipe(distinctUntilChanged()).subscribe(isAuth =>{
      this.isAuthenticated = isAuth
    })

    this.api.get('/wall-of-fame').subscribe(response => {
      this.wallOfFame = response;
    });

    this.hallOfFameForm = new FormGroup({
      searchType: new FormControl(
      "",
      {
        validators: [
      ]}),
      countryType: new FormControl(
      "",
      {
        validators: [
      ]}),
      ageType: new FormControl(
      "",
      {
        validators: [
      ]}),
    });
  }

  ngOnInit(): void {
  }

  hallOfFameSubmit(event: any): void {

  }

}
