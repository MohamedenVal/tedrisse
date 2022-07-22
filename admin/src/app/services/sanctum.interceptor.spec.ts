import { TestBed } from '@angular/core/testing';

import { SanctumInterceptor } from './sanctum.interceptor';

describe('SanctumInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SanctumInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SanctumInterceptor = TestBed.inject(SanctumInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
