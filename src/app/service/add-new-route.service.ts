import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewRouteService {


  stationUrl = 'http://192.168.2.11:8080/stations';

  constructor(private http: HttpClient) {
   }


   
  getAllStations(){
    return this.http.get<{ id: number; title: string; }[]>(this.stationUrl);
  }
}
