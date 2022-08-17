import { TestBed } from '@angular/core/testing';

import { CanChildrenActivateGuard } from './can-children-activate.guard';

describe('CanChildrenActivateGuard', () => {
  let guard: CanChildrenActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanChildrenActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
