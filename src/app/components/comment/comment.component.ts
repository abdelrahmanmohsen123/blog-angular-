import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input('comment') comment !:Array<Comment>

}
