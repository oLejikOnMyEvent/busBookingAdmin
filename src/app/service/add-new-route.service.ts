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

  getAllRoutes(){
   return this.http.get('http://localhost:4200/admin/route')
  }

  deleteRoutes(item){
    return this.http.delete(`http://localhost:4200/admin/route/${item}`)
  }
}
