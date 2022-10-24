import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTypingComponent } from './test-typing.component';

const routes: Routes = [{
  path: '',
  component: TestTypingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTypingRoutingModule { }
