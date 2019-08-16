import { LoginComponent } from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGaurdService } from './auth/auth-gaurd.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivateChild: [AuthGaurdService],
  }, {
    path: '',
    canActivateChild: [AuthGaurdService],
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }, ],
  
   
  },
  // {path: 'auth', component: AuthComponent},
  { path: 'loginAdmin', component: LoginComponent },
  {path: 'logoutAdmin', component: LogoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      //  useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
