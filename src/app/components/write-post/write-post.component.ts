import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  constructor(private _postService: PostService) { }

  ngOnInit() {
  }

  errorMessage: String;

  onSubmit(form: NgForm) {

    const post: Post = {
      text: form.value.text,
      datetime: Date().slice(4,20),
      upvotes: 0
    };
    this._postService.createPost(post)
      .subscribe(data => {
      }, err => this.errorMessage = err);
  }

}
