import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddDelBusService {

  constructor(private http: HttpClient) { }


  busURL = 'http://localhost:4200/admin/bus'
  addBus(data){
    return this.http.post(this.busURL, data)
     //admin/bus/
  }


  getBus(){
    return this.http.get(this.busURL)
  }

  delBus(item){

    return this.http.delete(`http://localhost:4200/admin/bus/${item}`)
//admin/bus/{deleteItemId}
  }
}
