import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAuthGuardService } from './services/customer/customer-auth-guard.service';
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './customer/login/login.module#LoginPageModule' },
  { path: 'customer/signup', loadChildren: './customer/signup/signup.module#SignupPageModule' },
  { path: 'logout', loadChildren: './customer/logout/logout.module#LogoutPageModule' },
  { 
    path: 'customer', 
    canActivate: [CustomerAuthGuardService],
    loadChildren: './customer/customer-routing.module#CustomerRoutingModule'
  },
  { path: 'customer/signup', loadChildren: './customer/signup/signup.module#SignupPageModule' },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
