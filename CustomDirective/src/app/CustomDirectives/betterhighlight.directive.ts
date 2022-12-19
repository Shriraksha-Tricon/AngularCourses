import { style } from '@angular/animations';
import { Directive, ElementRef, Renderer2, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() defaultColor: string = 'transparent'
  @Input() hightlightColor: string = 'yellow'

  ngOnInit() {
    this.background = this.defaultColor
  }

  @HostBinding('style.backgroundColor') background: string = this.defaultColor
  @HostBinding('style.border') border: string = 'none'

  @HostListener('mouseenter') mouseenter() {
    this.background = this.hightlightColor
    this.border = 'red 2px solid'
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor
    this.border = 'none'
  }

}
