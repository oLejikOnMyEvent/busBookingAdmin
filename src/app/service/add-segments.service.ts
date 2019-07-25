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

  createNewTrip(busId, routeSegmentId ) {
    let data = {
      tripNumber: 1,
      routeSegmentId: routeSegmentId,
      timeDeparture: "2019-08-01 18:10",
      timeArrival: "2019-08-02 02:00",
      segmentPrice: 1500,
      busId: busId

    }

  return this.http.post('http://192.168.2.11:8080/admin/trip/add', data)
  }


  getBusList(){
    return this.http.get(this.busAddress);
  }
}
