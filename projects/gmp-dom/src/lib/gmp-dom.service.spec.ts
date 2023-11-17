import { TestBed } from '@angular/core/testing';

import { GmpDomService } from './gmp-dom.service';

describe('GmpDomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpDomService = TestBed.get(GmpDomService);
    expect(service).toBeTruthy();
  });
});
