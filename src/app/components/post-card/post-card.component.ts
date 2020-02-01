import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor() { }
  allpost = [{
    id: 1,
    text: "post1",
    datetime: Date(),
    upvotes: 2
  },
  {
    id: 2,
    text: "post2",
    datetime: Date(),
    upvotes: 2
  },
  {
    id: 3,
    text: "post3",
    datetime: Date(),
    upvotes: 2
  }];


  ngOnInit() {
  }

}
