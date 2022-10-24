import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterTypingRaceComponent } from './enter-typing-race.component';

const routes: Routes = [{
  path: '',
  component: EnterTypingRaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterTypingRaceRoutingModule { }
