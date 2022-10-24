import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkinsComponent } from './skins.component';

const routes: Routes = [{
  path: '',
  component: SkinsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkinsRoutingModule { }
