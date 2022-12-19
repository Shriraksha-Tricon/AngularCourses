import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @HostBinding('style.backgroundColor') background: string = 'transparent'
  @HostBinding('style.border') border: string = 'none'

  @HostListener('mouseenter') mouseenter() {
    this.background = 'yellow'
    this.border = 'red 2px solid'
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'transparent'
    this.border = 'none'
  }

}
