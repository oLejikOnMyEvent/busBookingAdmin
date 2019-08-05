import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllTripsNumbersService {

  constructor(private http: HttpClient) { }

  getTripsNumber(){
    return this.http.get('http://localhost:4200/admin/trip')

  }

  getFullTrip(id){
    return this.http.get(`http://localhost:4200/admin/trip/${id}`)
  }

  getTripsNumObj = [
    25,
    111,
    100,
    110,
    15,
    17,
    20,
    600
  ]
  // getTripsNumber() {
  //   return of(this.getTripsNumObj)
  // }


  getFullTripObj = [
    {
      data: 'Present data'
    }
  ]
  // getFullTrip(id) {
  //   console.log(id)
  //   return of(this.getFullTripObj)
  // }


  deleteTrip(id) {
    return this.http.delete(`http://localhost:4200/admin/trip/${id}`)
  }
}
