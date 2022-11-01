import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { checkUniquenessValidator } from 'src/app/core/validators/checkUniquenessValidator';
import { createPasswordStrengthValidator } from 'src/app/core/validators/createPasswordStrengthValidator';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  public profileForm!: FormGroup;
  public optionsForm!: FormGroup;
  public leyboardLayoutForm!: FormGroup;
  public changePasswordForm!: FormGroup;

  public isProfilePosted: boolean | false | undefined;
  
  public genderList: any = [
    {"Male":'M'},
    {"Female":'F'},
  ];

  public username!: String;
  public firstname!: String;
  public lastname!: String;
  public gender!: String;


  public mykeyboard!: String;


  public measureSpeed!: String;
  public enableSounds!: String;


  public password!: String;
  public newpassword!: String;
  public renewpassword!: String;

  wallOfFame: any = {topuser: "cwhitmarsh.13", topspeed: "150 WPM", topprec : "97%"}
  keyboard: any = [{"United States":'1'},{"Australian":"2"}]

  constructor(private http: HttpClient,private router: Router,private api: ApiService,private fb: FormBuilder) {

    this.api.get('/wall-of-fame').subscribe(response => {
      this.wallOfFame = response;
    });
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'username': new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          checkUniquenessValidator(),
      ]}),
      'email': new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]}),
        'firstname': new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120),
            createPasswordStrengthValidator()
        ]}),
        'lastname': new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]}),
        'mygender': new FormControl(
          "",
          {
          validators: [
            Validators.required
          ]})
    });

    this.api.get('/account').subscribe(response => {
      console.log(response);

      this.profileForm.controls['username'].setValue(response.username);
      this.profileForm.controls['firstname'].setValue(response.firstname);
      this.profileForm.controls['lastname'].setValue(response.lastname);
      this.profileForm.controls['mygender'].setValue(response.gender);
      this.profileForm.controls['email'].setValue(response.email);

      this.optionsForm.controls['measureSpeed'].setValue(response.measureSpeed);
      this.optionsForm.controls['enableSounds'].setValue(response.enableSounds);

      this.changePasswordForm.controls['newpassword'].setValue(response.password);
      this.changePasswordForm.controls['newre_password'].setValue(response.re_password);
    });
    console.log(this.username);
    

    this.optionsForm = new FormGroup({
      measureSpeed: new FormControl(
      "",
      {
        validators: [
          Validators.required
      ]}),
      enableSounds: new FormControl(
        "",
        {
          validators: [
            Validators.required
        ]})
    });


    this.leyboardLayoutForm = new FormGroup({
      mykeyboard: new FormControl(
      "",
      {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          checkUniquenessValidator(),
      ]})
    });



    this.changePasswordForm = new FormGroup({
      password: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120),
            createPasswordStrengthValidator()
        ]}),
        newpassword: new FormControl(
          "",
          {
            validators: [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(120),
              createPasswordStrengthValidator()
          ]}),
      newre_password: new FormControl(
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(120)
        ]})
    });


  }

  profileSubmit(event: any) {

  }

  optionsSubmit(event: any) {

  }

  leyboardLayoutSubmit(event: any) {

  }

  changePasswordSubmit(event: any) {

  }

  getKey(obj: Object, i: number) {
    var j = 0;
    for (var p in obj) {
      if (j+i == i) { 
        return p;
      }
    }
    return null;
  }

}
