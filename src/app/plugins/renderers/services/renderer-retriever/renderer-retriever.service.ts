import { Injectable } from '@angular/core';
import { Renderable } from '../../classes/renderable';
import { TextComponent } from '../../components/text/text.component';
import { JavaComponent } from '../../components/java/java.component';

@Injectable({
  providedIn: 'root'
})
export class RendererRetrieverService {

  constructor() { }

  getRendererByExtension(extension: string) {
    let renderable: Renderable;

    switch (extension) {
      case 'txt': {
        renderable = new Renderable(TextComponent, {});
        break;
      }
      case 'java': {
        renderable = new Renderable(JavaComponent, {});
        break;
      }
      default: {
        renderable = new Renderable(TextComponent, {});
      }
    }
    return renderable;
  }
}
