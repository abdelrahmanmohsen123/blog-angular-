import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.usersUrl;
  constructor(private http:HttpClient) { }

  getUsers() :Observable<Array<User>>{
    return this.http.get<Array<User>>(this.userUrl)
  }

  getUserById(id :number):Observable<User>{
    return this.http.get(`${this.userUrl}/${id}`)
  }
  getPostId(id :number) :Observable<User>{
    return this.http.get(`${this.userUrl}/${id}`)
  }
}
