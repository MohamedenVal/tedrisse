import { TestBed } from '@angular/core/testing';

import { ExamplesService } from './examples.service';

describe('ExamplesService', () => {
  let service: ExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
