import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') onmousehover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px')
    this.renderer.setStyle(this.element.nativeElement, 'trasiion', '0.5s')
  }
  
  @HostListener('mouseleave') onmousehout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px')
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px')
    this.renderer.setStyle(this.element.nativeElement, 'trasiion', '0.5s')
  }

}
