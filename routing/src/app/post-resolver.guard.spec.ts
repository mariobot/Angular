import { TestBed } from '@angular/core/testing';

import { PostResolverGuard } from './post-resolver.guard';

describe('PostResolverGuard', () => {
  let guard: PostResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
