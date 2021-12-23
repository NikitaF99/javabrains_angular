import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //note: when the property name is diffrent from attribute name, we need to pass as string argument
  //@Input('appHighlight') color = 'yellow'
  @Input() color = 'yellow'
  
  //giving refernce to elemet
  constructor(private element: ElementRef) {
    console.log(element)
    //this gets all the elemtn to which the directive is applied
   
   }

   //host listemer is a directive which tells that you want to listen to the host element
   //and call the methods based on different events
   @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color
   }

   @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
   }
}
