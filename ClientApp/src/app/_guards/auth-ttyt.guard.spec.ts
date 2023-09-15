import { TestBed } from '@angular/core/testing';

import { AuthTtytGuard } from './auth-ttyt.guard';

describe('AuthTtytGuard', () => {
  let guard: AuthTtytGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTtytGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
