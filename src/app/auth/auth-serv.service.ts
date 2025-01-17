import { Injectable } from '@angular/core';

// import { HttpClientService } from './http-client.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  constructor(private http: HttpClient) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<User>('http://localhost:4200/admin/stations', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        
        }
      )

    );

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }


}
