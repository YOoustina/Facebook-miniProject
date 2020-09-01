import { Component, OnInit, Input } from '@angular/core';
import{PostService} from'../_service/post.service';


@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.scss']
})
export class CommentComponentComponent implements OnInit {
  @Input()
  comments;
  constructor(private postService:PostService) { }

  ngOnInit() {

    console.log(this.comments);
    
      }

    
    
  }


