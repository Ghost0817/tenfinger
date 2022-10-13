import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'student/lessons',
  pathMatch: 'full'
},{
  path: 'student',
  loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
