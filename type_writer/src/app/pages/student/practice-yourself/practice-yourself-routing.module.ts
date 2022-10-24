import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeYourselfComponent } from './practice-yourself.component';

const routes: Routes = [{
  path: '',
  component: PracticeYourselfComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeYourselfRoutingModule { }
