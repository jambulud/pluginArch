import { Type } from '@angular/core';

export class Renderable {
  constructor(public component: Type<any>, public data: any) {}
}
