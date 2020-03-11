import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererDirective } from './directives/renderer/renderer.directive';

@NgModule({
  declarations: [RendererDirective],
  imports: [
    CommonModule
  ]
})
export class RenderersModule { }
