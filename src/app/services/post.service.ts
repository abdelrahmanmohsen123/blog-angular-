import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {



  private postUrl = environment.postsUrl;
  constructor(private http:HttpClient) { }

  getPosts() :Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.postUrl)
  }

  getPostId(id :number) :Observable<Post>{
    return this.http.get(`${this.postUrl}/${id}`)
  }
}
