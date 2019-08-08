import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSegmentsService {

  constructor(private http: HttpClient) { }

  routeNumber = 'http://localhost:4200/admin/route';




  busAddress = 'http://localhost:4200/admin/bus';

  getRouteNumber() {
    return this.http.get<{ id: number; title: string; }[]>(this.routeNumber);
  }

  getAdminRoute(id) {
    return this.http.get(`http://localhost:4200/admin/trip/add/${id}`)
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
    return this.http.post('http://localhost:4200/admin/trip/add', data)
  }


  objOfBus = [
    { id: 1, title: "Hyundai", seatsCount: 60 },
    { id: 2, title: "Mercedes", seatsCount: 80 }
  ]

  getBusList(): Observable<any[]> {
    return this.http.get<{ id: number; title: string; }[]>(this.busAddress);
  }


  objectWithData = [
    {
      id: 2, routeDto: {
        id: 2,
        title: "Мск-Елец-Врнж-Мхч",
        vector: "=1==3==2==6==5==4==11=="
      },
      segmentDto: {
        id: 2,
        price: 1000,
        stationFinish: {
          id: 3,
          title: "Елец"
        },
        stationStart: {
          id: 1,
          title: "Москва"
        },
        title: "Москва-Елец"
      }
    },

    {
      id: 3, routeDto: {
        id: 3,
        title: "Мск-Елец-Врнж-Мхч",
        vector: "=1==3==2==6==5==4==11=="
      },
      segmentDto: {
        id: 3,
        price: 1488,
        stationFinish: {
          id: 4,
          title: "Не Елец"
        },
        stationStart: {
          id: 1,
          title: "Не Москва"
        },
        title: "Не Москва- Не Елец"
      }
    },
  ]

  // getBusList(): Observable<any[]> {
  //   return of(this.objOfBus)

  // }
}

//http://192.168.2.11:8080/admin/bookings -- все бронирования(купленные билеты)
//http://192.168.2.11:8080/admin/users -- все учетные записи 
//http://192.168.2.11:8080/admin/trip -- номера всех рейсов
//http://192.168.2.11:8080/admin/trip/${num} --номер текущего рейса