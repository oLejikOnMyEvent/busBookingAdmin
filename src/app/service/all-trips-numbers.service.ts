import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllTripsNumbersService {

  constructor(private http: HttpClient) { }

  getTripsNumber(){
    return this.http.get('http://192.168.2.11:8080/admin/trip')
    
  }

  getFullTrip(id){
    return this.http.get(`http://192.168.2.11:8080/admin/trip/${id}`)
  }
}
