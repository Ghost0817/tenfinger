import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceYourFriendsComponent } from './race-your-friends.component';

const routes: Routes = [{
  path: '',
  component: RaceYourFriendsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceYourFriendsRoutingModule { }
