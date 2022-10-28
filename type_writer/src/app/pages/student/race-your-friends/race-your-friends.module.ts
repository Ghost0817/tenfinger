import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceYourFriendsRoutingModule } from './race-your-friends-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RaceYourFriendsComponent } from './race-your-friends.component';


@NgModule({
  declarations: [
    RaceYourFriendsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RaceYourFriendsRoutingModule
  ]
})
export class RaceYourFriendsModule { }
