import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  ngOnInit() {
    //Directly adding Style
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor', '#F1948A');

    //Adding CSS Class
    this.renderer.addClass(this.element.nativeElement,'container');

    //Set Attribute Directly on HTML Element
    this.renderer.setAttribute(this.element.nativeElement,'title', 'This is Example Div')
  }

}
