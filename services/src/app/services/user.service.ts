import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = environment.apiURL + 'users/';

  constructor(private http: HttpClient) {}

  getUser(userId: string): Observable<User> {
    const url = this.baseURL + userId;
    return this.http.get<User>(url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL, user);
  }

  updateUser(user: User): Observable<User> {
    const url = this.baseURL + user.id;
    return this.http.put<User>(url, user);
  }

  patchUser(id: number, operations: Operation[]) {
    const url = this.baseURL + id;
    return this.http.patch(url, operations);
  }

  deleteUser(id: number): Observable<any> {
    const url = this.baseURL + id;
    return this.http.delete(url);
  }
}
