import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Comment } from '../interfaces/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentUrl = environment.commentUrl;
  constructor(private http:HttpClient) { }

  getComments() :Observable<Array<Comment>>{
    return this.http.get<Array<Comment>>(this.commentUrl)
  }
}
