import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererDirective } from './directives/renderer/renderer.directive';
import { TextComponent } from './components/text/text.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { RendererRetrieverService } from './services/renderer-retriever/renderer-retriever.service';
import { JavaComponent } from './components/java/java.component';

@NgModule({
  declarations: [RendererDirective, TextComponent, RendererComponent, JavaComponent],
  imports: [CommonModule],
  providers: [RendererRetrieverService],
  exports: [RendererComponent],
  entryComponents: [TextComponent, JavaComponent],
})
export class RenderersModule {}
