


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormlyModule } from '@ngx-formly/core';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';



import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { BasicAuthHtppInterceptorService } from './auth/basic-auth-http-interceptor.service';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormlyModule.forRoot(),
 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    LogoutComponent,
  

  ],
  exports: [

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
