import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile', //the html tag name
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  // encapsulation: ViewEncapsulation.None //to remove the feature of angular
  //wheere scss class names are restricted only to that component
  //can be used for shared component

//....................................................
  changeDetection: ChangeDetectionStrategy.OnPush //dont look deep to detec changes but only look the reference
})
export class BlogPostTileComponent implements OnInit {


  //  @Input() title: string | undefined; //component input
  //  @Input() summary: string | undefined;

  @Input()
  post!: BlogPost;
  fullSummary!: string;


  @Input() set showOnPress(value: boolean) {
    if(value){
    this.showFullSummary();
    console.log("triggered");
    }
   
}

  //constructors are used for dependency injection
  constructor(private trucatePipe:TruncatePipe) { }

  ngOnInit(): void {
    //calling the trucate pipe here. Much similar to how services work
    //1.TruncatePipe annd to app.module imports and providers section
    this.fullSummary = this.post.summary;
    this.post.summary=this.trucatePipe.transform(this.post.summary,30);
 
  }

  showFullSummary(){
    this.post.summary = this.fullSummary;
  }

  toggleFav(){
    this.post.isFav = !this.post.isFav
  }

}
