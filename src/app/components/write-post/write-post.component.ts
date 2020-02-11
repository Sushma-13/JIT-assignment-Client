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
    this.getAllPosts();
  }

  allpost: Post[];
  isloading:boolean;

  getAllPosts() {
    this.isloading=true;
    this._postService.getPosts().subscribe(posts => {
      this.allpost = posts.reverse();
      this.isloading=false;
    });

  }

  updateUpvotes(index: number) {
    let postToUpdate: Post = this.allpost[index];
    postToUpdate.upvotes = postToUpdate.upvotes + 1;
    this._postService.updateUpvotes(postToUpdate, postToUpdate._id)
      .subscribe(res => { console.log("Upvoted"); });
  }

  errorMessage: String;

  onSubmit(form: NgForm) {
    if(form.value.text==null || form.value.text==""){
      return;
    }
    const post: Post = {
      text: form.value.text,
      datetime: Date().slice(4, 23),
      upvotes: 0
    };

    this._postService.createPost(post)
      .subscribe(data => {
        this.getAllPosts();
        form.reset();
      }, err => this.errorMessage = err);
      
  }

}
