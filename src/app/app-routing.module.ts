import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent, 
    children: [
      {path: '', component: DashboardComponent,title: 'Welcome to Dashboard'}
    ],
  },

  {
    path: '',
    component: LoginComponent, 
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {path: 'forgetPassword', component: ForgetpasswordComponent,title: 'Forget Password'},
  {path: 'register', component: SignupComponent,title: 'Register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
