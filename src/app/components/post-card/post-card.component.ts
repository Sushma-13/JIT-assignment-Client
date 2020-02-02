import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  allpost:Post[];
  constructor(private _postService: PostService) { }
  


  ngOnInit() {
    this._postService.getPosts().subscribe(posts=>{this.allpost=posts;
      console.log("This is allpost from components")
      console.log(this.allpost);
    });
    
  }

  updateUpvotes(index:number){
    let post:Post=this.allpost[index];
    post.upvotes=post.upvotes+1;
    this._postService.updateUpvotes(post,post._id);
  }

}
