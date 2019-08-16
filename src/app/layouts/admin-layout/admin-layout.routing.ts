// import { LoginComponent } from '../../auth/login/login.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../buyedTickets/user-profile.component';
import { TableListComponent } from '../../trips/table-list.component';



import { UserListComponent } from '../../userList/user-list.component'
import { SegmentComponent } from '../../Segments/segment.component'

import {AddDelBusComponent} from '../../add-del-bus/add-del-bus.component'
import { AddDelStationComponent } from '../../add-del-station/add-del-station.component'
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'segments', component: SegmentComponent },
    { path: 'userlist', component: UserListComponent },
    {path: 'addDelBus', component: AddDelBusComponent},
    {path : 'addDelStation', component : AddDelStationComponent}

];
