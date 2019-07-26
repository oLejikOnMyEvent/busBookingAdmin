import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddSegmentsService {

  constructor(private http: HttpClient) { }

  routeNumber = 'http://192.168.2.11:8080/admin/route';

      


  busAddress = 'http://192.168.2.11:8080/admin/bus';
  getRouteNumber() {
    return this.http.get<{ id: number; title: string; }[]>(this.routeNumber);
  }

  getAdminRoute(id) {
    return this.http.get(`http://192.168.2.11:8080/admin/trip/add/${id}`)
  }

  // createNewTrip(busId, segmentPrice, timeArrival, timeDeparture, routeSegmentId, tripNumber ) {
  //   let data = {
  //     tripNumber: 1,
  //     routeSegmentId: routeSegmentId,
  //     timeDeparture: "2019-08-01 18:10",
  //     timeArrival: "2019-08-02 02:00",
  //     segmentPrice: 1500,
  //     busId: busId

  //   }

  createNewTrip(data) {
  return this.http.post('http://192.168.2.11:8080/admin/trip/add', data)
  }


  getBusList(){
    return this.http.get(this.busAddress);
  }
}

//http://192.168.2.11:8080/admin/bookings -- все бронирования(купленные билеты)
//http://192.168.2.11:8080/admin/users -- все учетные записи 
//http://192.168.2.11:8080/admin/trip -- номера всех рейсов
//http://192.168.2.11:8080/admin/trip/${num} --номер текущего рейса