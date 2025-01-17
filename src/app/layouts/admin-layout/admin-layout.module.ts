
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../buyedTickets/user-profile.component';
import { TableListComponent } from '../../trips/table-list.component';

import { SegmentComponent } from '../../Segments/segment.component';
import { UserListComponent } from '../../userList/user-list.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { RepeatTypeComponent } from '../../Segments/repeat-section.type'
import {AddDelBusComponent} from '../../add-del-bus/add-del-bus.component'
import { AddDelStationComponent } from '../../add-del-station/add-del-station.component'


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,

    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
    }),
 
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    SegmentComponent,
    UserListComponent,
    AddDelBusComponent,
    AddDelStationComponent,
    RepeatTypeComponent
  ]
})

export class AdminLayoutModule { }
