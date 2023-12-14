import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  apiurl: string = 'https://dummyjson.com/users';

  getUsers(): Observable<any> {
    return this.httpClient.get(this.apiurl);
  }
}
