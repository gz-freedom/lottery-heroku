import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[matchLottery]'
})
export class AppDirective {
  @Input("lottery") lottery: number
  constructor(
    el: ElementRef,
    renderer: Renderer
  ) {
    if(this.lottery) {
     renderer.setElementStyle(el, "background-color", "#fff"); 
    }
  }

}
