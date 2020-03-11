import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  Input
} from '@angular/core';
import { Renderable } from '../../classes/renderable';
import { RendererDirective } from '../../directives/renderer/renderer.directive';
import { RendererRetrieverService } from '../../services/renderer-retriever/renderer-retriever.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {
  private renderable: Renderable;
  @ViewChild(RendererDirective) rendererHost: RendererDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private rendererRetriever: RendererRetrieverService
  ) {}

  ngOnInit() {}

  @Input() set extension(value: string) {
    if (value) {
      this.setRendererByExtension(value);
      this.loadComponent();
    }
  }

  setRendererByExtension(extension: string) {
    this.renderable = this.rendererRetriever.getRendererByExtension(extension);
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.renderable.component
    );

    const viewContainerRef = this.rendererHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = this.renderable.data;
  }
}
