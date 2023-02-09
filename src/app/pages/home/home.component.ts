import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { User } from 'src/app/interfaces/User';
import { PostService } from 'src/app/services/post.service';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   posts ?: Array<Post>
   arr = [1,2,3,4]
    constructor(private Postservice : PostService){

    }

    ngOnInit() :void{
      this.Postservice.getPosts().subscribe({
        next :res =>this.posts=res,
        error :err => console.error(err)
      })
    }

    getDataSearching(event: string) {
      console.log(event);
      this.posts = this.posts?.filter((val) => val.title?.indexOf(event) != -1);
    }


}
