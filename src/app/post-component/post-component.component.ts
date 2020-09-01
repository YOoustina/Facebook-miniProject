import { Component, OnInit, Output, Input } from '@angular/core';
import * as data from '../../assets/data.json';
import{PostService} from'../_service/post.service';



@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {
arrayOfPosts;
status: boolean = false;


  constructor( private postService:PostService ) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(
      (data)=>{console.log(data);
        this.arrayOfPosts=data;
      }
    )
    
 
}

boolenLike(){
  this.status = !this.status;      
  
}
}
