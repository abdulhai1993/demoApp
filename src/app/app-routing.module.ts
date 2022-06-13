import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { MainGuard } from './core/guards/main.guard';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UserManagementComponent } from './views/userManagement/userManagement.component';
import { ForgotPasswordComponent } from './auth/forgotPassword/forgotPassword.component';
import { ResetPasswordComponent } from './auth/forgotPassword/resetPassword.component';
import { ActiveUserComponent } from './views/userManagement/activeUser/activeUser.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [],
    canActivate: [MainGuard]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [],
    canActivate: [MainGuard]
  },
  {
    path: 'forgotPass',
    component: ForgotPasswordComponent,
    canActivate: [MainGuard],
    children: []
  },
  {
    path: 'resetPass',
    component: ResetPasswordComponent,
    canActivate: [MainGuard],
    children: []
  },
  {
    path: 'logout',
    component: LogoutComponent,
    children: [],
    canActivate: [AuthGuard]
  },
  {
    path: 'user/management',
    // component: HomeComponent,
    component: UserManagementComponent,
    children: [],
    canActivate: [AuthGuard]
  },
  {
    path: 'user/management/list',
    // component: HomeComponent,
    component: ActiveUserComponent,
    children: [],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
