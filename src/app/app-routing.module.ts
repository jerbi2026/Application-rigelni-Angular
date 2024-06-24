import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { App1Component } from './app1/app1.component';
import { PredMedComponent } from './pred-med/pred-med.component';
import { PagebloqueeComponent } from './pagebloquee/pagebloquee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'forget_password', component: ForgetPasswordComponent },
  { path: 'user', component: UserComponent },
  { path: 'app1', component: App1Component },
  { path: 'predict', component: PredMedComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: PagebloqueeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagebloqueeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
