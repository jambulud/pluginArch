import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
