import { Component, OnInit } from '@angular/core';
import { AuthServService }  from '../../auth/auth-serv.service'

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Редактировать маршрут', icon: 'dashboard', class: '' },
  { path: '/segments', title: 'Добавить сегмент', icon: 'bookmark', class: '' },
  { path: '/user-profile', title: 'Купленные билеты', icon: 'person', class: '' },
  { path: '/userlist', title: 'Список пользователей', icon: 'account_circle', class: '' },
  { path: '/table-list', title: 'Текущие рейсы', icon: 'content_paste', class: '' },
  {path: '/addDelBus', title: 'Редактирование Автобусов', icon: 'directions_bus' , class: ''}, 
  {path: '/addDelStation', title: 'Редактирование Станций', icon: 'ev_station' , class: ' '},
  { path: '/logout', title: 'Выход', icon: 'exit_to_app', class: 'exit_button' }



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public loginService: AuthServService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
