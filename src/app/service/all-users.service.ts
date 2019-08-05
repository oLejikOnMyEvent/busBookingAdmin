import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllUsersService {


  testobj = [
    {
      userFullName: "Rafael Mendes",
      userName: "rafa"
    },
    {
      userFullName: "Oleg Osipov",
      userName: "olejii"
    },
  ]
  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get('http://localhost:4200/admin/users');
  }


  // getAllUsers() {
  //   return of(this.testobj);
  // }
}
