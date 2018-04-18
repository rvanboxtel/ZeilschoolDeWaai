import { TestBed, async, inject } from '@angular/core/testing';

import { AuthguardGuard } from './Authguard.guard';

describe('GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardGuard]
    });
  });

  it('should ...', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
