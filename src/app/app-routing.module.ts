import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';


const routes: Routes = [
  {path: 'login',
    component: LoginComponent
  },
  {
  path: 'signin',
    component: SignInComponent
  },
  {
    path: 'addprofile',
    component: ProfileComponent
  },
  {
    path: 'editPassword',
    component: ChangePasswordComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
