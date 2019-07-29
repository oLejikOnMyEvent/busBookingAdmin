import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllBookingRoutesService {

  constructor(private http: HttpClient) { }

  // buyedTickets(){
  //   return this.http.get('http://192.168.2.11:8080/admin/bookings')
  // }

  buyedTicketsObj = [
    {
      arrival: '2019-07-11T18:40:00',
      bookingDate: '2019-07-26T16:59:14.541',
      departure: '2019-07-10T09:00:00',
      price: 4900,
      seatNum: 14,
      tripNumber: 17,
      tripTitle: 'Москва - Махачкала',
      userFullname: 'Rafael Mendes',
      userName: 'rafa',
    }
  ]
  buyedTickets() {
    return of(this.buyedTicketsObj)
  }
}
