import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input('user') user ?: Array<User>
  users !: Array<User>
  constructor(private UserService : UserService){
  }
    ngOnInit(){
      // console.log(this.route.params.subscribe(param=>this.id = param['id']))
      // this.postService.getPostId()
    this.UserService.getUsers().subscribe(res =>this.users = res)
    }
  }

