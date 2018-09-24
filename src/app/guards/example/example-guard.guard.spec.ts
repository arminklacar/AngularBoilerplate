import { TestBed, async, inject } from '@angular/core/testing';

import { ExampleGuardGuard } from './example-guard.guard';

describe('ExampleGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleGuardGuard]
    });
  });

  it('should ...', inject([ExampleGuardGuard], (guard: ExampleGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
