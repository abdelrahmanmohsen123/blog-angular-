import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/Post';
import { User } from 'src/app/interfaces/User';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  user !:User
  posts !:Array<Post>
  id !:number
  userPosts !:Array<Post>
  constructor(private UserSERVICE : UserService,private postService : PostService, private route: ActivatedRoute ){

  }

  ngOnInit(){
    console.log(this.route.params.subscribe(param=>this.id = param['id']))
    // this.postService.getPostId()
  this.UserSERVICE.getUserById(this.id).subscribe(res =>this.user = res)
    this.postService.getPosts().subscribe(res =>{
      this.userPosts = res.filter((post)=> post.userId == this.id)
      console.log(this.userPosts)
    })
}
}
