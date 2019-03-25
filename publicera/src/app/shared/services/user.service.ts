import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  register(request): Observable<any> {
    console.log('register invoked', request);
    return this.http.post(`/dev/user/create`, request);
  }

  getUser(email): Observable<any> {
    console.log('get user invoked', email);
    return this.http.get(`/dev/user/get/${email}`);
  }
}
