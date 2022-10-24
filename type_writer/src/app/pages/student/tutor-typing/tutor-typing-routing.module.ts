import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorTypingComponent } from './tutor-typing.component';

const routes: Routes = [{
  path: '',
  component: TutorTypingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorTypingRoutingModule { }
