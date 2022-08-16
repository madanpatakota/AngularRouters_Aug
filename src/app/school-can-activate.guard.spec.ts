import { TestBed } from '@angular/core/testing';

import { SchoolCanActivateGuard } from './school-can-activate.guard';

describe('SchoolCanActivateGuard', () => {
  let guard: SchoolCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchoolCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
