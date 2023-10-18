import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Use layout for all routes
    children: [
      {path: '', component: DashboardComponent,title: 'Welcome to Dashboard'}
    ],
  },
  {
    path: 'login',
    component: LoginComponent, // A separate login component without the layout
  },
  {path: 'forgetPassword', component: ForgetpasswordComponent,title: 'Forget Password'},
  {path: 'register', component: SignupComponent,title: 'Register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
