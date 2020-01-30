import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createPost(form:NgForm){
    if(form.value.postTxt!=null && form.value.postTxt!=""){
      console.log(form.value.postTxt);
    }
    
  }

}
