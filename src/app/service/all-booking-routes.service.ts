import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllBookingRoutesService {

  constructor(private http: HttpClient) { }

  buyedTickets(){
    return this.http.get('http://192.168.2.11:8080/admin/bookings')
  }
}
