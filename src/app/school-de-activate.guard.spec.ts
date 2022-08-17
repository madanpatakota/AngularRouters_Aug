import { TestBed } from '@angular/core/testing';

import { SchoolDeActivateGuard } from './school-de-activate.guard';

describe('SchoolDeActivateGuard', () => {
  let guard: SchoolDeActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolDeActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
