import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewRouteService {


  stationUrl = 'http://localhost:4200/stations';
  
  addStationsUrl = 'http://localhost:4200/admin/route'
  constructor(private http: HttpClient) {
   }


   
  getAllStations(){
    return this.http.get<{ id: number; title: string; }[]>(this.stationUrl);
  }

  postAllStations(dataObj){
   

    return this.http.post(this.addStationsUrl, dataObj)
  }
}
