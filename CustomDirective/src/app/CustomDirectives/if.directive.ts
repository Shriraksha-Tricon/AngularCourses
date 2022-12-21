import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  // What to add or remove
  // From where to add or remove
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { 

  }

  @Input('appIf') set displayView(condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear()
    }
  }

}
