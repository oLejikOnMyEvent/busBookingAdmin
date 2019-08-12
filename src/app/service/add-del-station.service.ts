import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddDelStationService {

  constructor(private http: HttpClient) { }

stationURL = 'http://localhost:4200/admin/stations'

  addNewStation(dataObj){
  return this.http.post(this.stationURL, dataObj)
  }

  getStations(){
    return this.http.get(this.stationURL)
  }

  deleteStations(item){
    return this.http.delete(`http://localhost:4200/admin/stations/${item}`)
    //admin/stations/{deleteItemId}
  }
}