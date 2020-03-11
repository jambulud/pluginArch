import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererDirective } from './directives/renderer/renderer.directive';
import { TextComponent } from './components/text/text.component';

@NgModule({
  declarations: [RendererDirective, TextComponent],
  imports: [
    CommonModule
  ]
})
export class RenderersModule { }
