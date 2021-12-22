import { Component, Input, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile', //the html tag name
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {


  //  @Input() title: string | undefined; //component input
  //  @Input() summary: string | undefined;

  @Input()
  post!: BlogPost;

  //constructors are used for dependency injection
  constructor(private trucatePipe:TruncatePipe) { }

  ngOnInit(): void {
    //calling the trucate pipe here. Much similar to how services work
    //1.TruncatePipe annd to app.module imports and providers section
    this.post.summary=this.trucatePipe.transform(this.post.summary,30);
  }

}
