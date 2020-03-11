import { TestBed } from '@angular/core/testing';

import { RendererRetrieverService } from './renderer-retriever.service';

describe('RendererRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendererRetrieverService = TestBed.get(RendererRetrieverService);
    expect(service).toBeTruthy();
  });
});
