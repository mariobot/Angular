import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) { }

  obtenerUsernames(): Observable<string[]> {
    var url = './assets/usernames.json';
    return this.http.get<string[]>(url);
  }
}
