import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input()
  numberOfPages!: number;


  // Each time a page is clicked an output event is called which takes the number of the page
  @Output() pageNumberClick = new EventEmitter<number>();

  pages!: number[];
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.numberOfPages);
  }
  pageNumberClicked(i : number){
    this.pageNumberClick.emit(i);
    //it emits data with the page numebr
  }

}
