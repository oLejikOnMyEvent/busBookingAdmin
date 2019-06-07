import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Добавить рейс',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Купленные билеты',  icon:'person', class: '' },
    { path: '/table-list', title: 'Текущие рейсы',  icon:'content_paste', class: '' },
    { path: '/auth', title: 'Выход',  icon:'exit_to_app', class: 'exit_button' },
   
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

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
