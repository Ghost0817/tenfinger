import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [{
    path:'',
    redirectTo: 'lessons',
    pathMatch: 'full'
  },{
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then(m=>m.LessonsModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
