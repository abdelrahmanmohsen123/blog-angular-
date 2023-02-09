import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/Comment';
import { Post } from 'src/app/interfaces/Post';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input('post') post !:any
  id !:number
  postComments !:Array<Comment>
  comments !:Array<Comment>
  posts !:Array<Post>
  constructor(private postService :PostService ,private commentService : CommentService,private route:ActivatedRoute){

  }

  ngOnInit(){
    console.log(this.route.params.subscribe(param=>this.id = param['id']))
    // this.postService.getPostId()
  this.postService.getPostId(this.id).subscribe(res =>this.post = res)

  this.commentService.getComments().subscribe(res =>{
    this.postComments = res.filter((post)=> post.postId == this.id)
    console.log(this.postComments)
  })
  }

  getSearchData(event: string) {
    console.log(event);
    this.posts = this.posts.filter((val) => val.title?.indexOf(event) != -1);
  }
  // getPostId(){

  // }
}
