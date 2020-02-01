import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  allpost;
  constructor(private _postService: PostService) { }
  


  ngOnInit() {
    this._postService.getPosts().subscribe(posts=>this.allpost=posts);
    console.log(this.allpost);
  }

}
