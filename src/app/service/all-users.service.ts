import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get('http://192.168.2.11:8080/admin/users');
  }
}
