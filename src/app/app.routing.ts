import { LoginComponent } from './auth/login/login.component';
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
    canActivate: [AuthGaurdService]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }, ],
    canActivateChild: [AuthGaurdService],
   
  },
  // {path: 'auth', component: AuthComponent},
  { path: 'loginAdmin', component: LoginComponent }
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
  ],
})
export class AppRoutingModule { }
