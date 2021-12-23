import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  //blogPosts: BlogPost[] = []; //Initilaizing an array varibale of type BlogPost
  //blogPosts: BlogPost[] = []; //Initilaizing an array varibale of type BlogPost
  
  blogPosts!: BlogPost[][]; //array of pages\
  //1st dimension is for page and second dimension for blog post

  currentPage!: number;

  //we are saying that there is a child component, which is of name tile
  //so instance of child component is now provided to the variable blogPostTileComponet
  // @ViewChild('tile')blogPostTileComponent!: BlogPostTileComponent;


  //To get a list of component instance

  //we are saying that there is a child component, which is of name tile
  //so instance of child component is now provided to the variable blogPostTileComponet
  //  @ViewChild('tile')blogPostTileComponent!: BlogPostTileComponent;


  //To get a list of component instance
  show!: boolean;
  @ViewChildren('tile') blogPostTileComponent!:QueryList<BlogPostTileComponent>;


    constructor(private blogDataService:BlogDataService) { 

    }

  ngOnInit(): void {
    //have the initializing under noOnInit so it would be helpful for t4esting
   // this.blogPosts.push(new BlogPost('Blog post 1', 'Summary 1'))
    //this.blogPosts.push( new BlogPost('Blog post 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
    console.log(this.blogPostTileComponent)
    this.currentPage = 0;
    this.blogPosts = this.blogDataService.getData();

  }

  updatePage(newPage : number){
    console.log("Event emitted and method executed")
    this.currentPage = newPage;
  }
  //who should call the updatePage
  //Paginato should pass a message saying some page is clicked. And the p[ parent which is
  //blog list component should listen and call the update Page function


  expandAll(){
   // this.blogPostTileComponent.showFullSummary();
     this.show = true;


        console.log("triggered")

  }

  favAll(){
    // this.blogPosts[this.currentPage].forEach(post =>
    //   post.isFav =true);
    this.blogPosts[this.currentPage]=this.blogPosts[this.currentPage].map(
      post =>({
        title: post.title,
        summary:post.summary,
        isFav:true
      })
    )
    //Basicall we are crerating a new wobject and replacing it with the old. So since the ref channged,
    //the changeDetectionStregy.OnPush can detect it
  }


}

