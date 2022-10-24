import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRaceComponent } from './type-race.component';

const routes: Routes = [{
  path: '',
  component: TypeRaceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRaceRoutingModule { }
