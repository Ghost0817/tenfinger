import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [{
    path: '',
    redirectTo: 'lesson',
    pathMatch: 'full'
  }, {
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsModule),
    title: 'Free Typing Test - Bicheech.com'
  }, {
    path: 'typing-tutor/:lang/:category',
    loadChildren: () => import('./tutor-typing/tutor-typing.module').then(m => m.TutorTypingModule),
    //canActivate: [AuthGuard]
  }, {
    path: 'tests',
    loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule),
    title: 'Free Typing Test - Bicheech.com'
    //canActivate: [AuthGuard]
  }, {
    path: 'typing-test',
    loadChildren: () => import('./test-typing/test-typing.module').then(m => m.TestTypingModule),
    //canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  }, {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule),
  },  {
    path: 'password-reset/:key',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule),
  }, {
    path: 'signup',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  }, {
    path: 'hall-of-fame',
    loadChildren: () => import('./hall-of-fame/hall-of-fame.module').then(m => m.HallOfFameModule),
  }, {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
    title: 'Contact Us - Bicheech.com'
  }, {
    path: 'games',
    loadChildren: () => import('./games-list/games-list.module').then(m => m.GamesListModule),
  }, {
    path: 'skins',
    loadChildren: () => import('./skins/skins.module').then(m => m.SkinsModule),
  }, {
    path: 'upgrade',
    loadChildren: () => import('./upgrade/upgrade.module').then(m => m.UpgradeModule),
  }, {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),
  }, {
    path: 'preferences',
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule),
  }, {
    path: 'race',
    loadChildren: () => import('./type-race/type-race.module').then(m => m.TypeRaceModule),
  }, {
    path: 'enter-typing-race',
    loadChildren: () => import('./enter-typing-race/enter-typing-race.module').then(m => m.EnterTypingRaceModule),
  }, {
    path: 'race-your-friends',
    loadChildren: () => import('./race-your-friends/race-your-friends.module').then(m => m.RaceYourFriendsModule),
  }, {
    path: 'practice-yourself',
    loadChildren: () => import('./practice-yourself/practice-yourself.module').then(m => m.PracticeYourselfModule),
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
