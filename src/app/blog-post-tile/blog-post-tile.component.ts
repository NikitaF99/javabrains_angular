import { Component, Input, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile', //the html tag name
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

//  @Input() title: string | undefined; //component input
//  @Input() summary: string | undefined;
  //  @Input() title: string | undefined; //component input
  //  @Input() summary: string | undefined;

  @Input()
  post!: BlogPost;
  constructor() { }

  ngOnInit(): void {
    // this.title="Blog title";
    // this.summary="Blog post summary"
    //Gonna pass through another componenet
  }

}
