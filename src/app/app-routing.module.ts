import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard.component';
import {LoginComponent} from './features/login/login.component';
import {ProfileComponent} from './features/profile/profile.component';
import {ConfigurationComponent} from './features/configuration/configuration.component';
import {ChartsComponent} from './features/charts/charts.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: ConfigurationComponent
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
