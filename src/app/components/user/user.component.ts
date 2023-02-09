import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  id !:number
  @Input('user')  user !:User
  constructor(private userService :UserService ,private route: ActivatedRoute){

  }
  ngOnInit(){
    console.log(this.route.params.subscribe(param=>this.id = param['id']))
    // this.postService.getPostId()
  this.userService.getUserById(this.id).subscribe(res =>this.user = res)
  }
}
