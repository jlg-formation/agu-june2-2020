import { TestBed } from '@angular/core/testing';

import { ConfirmGuard } from './confirm.guard';

describe('ConfirmGuard', () => {
  let guard: ConfirmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'Window',
          useClass: class MyWindow {
            confirm(str: string) {
              console.log('Are you sure... test');
              return true;
            }
          },
        },
      ],
    });
    guard = TestBed.inject(ConfirmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if accepted', () => {
    const isActivated = guard.canActivate(undefined, undefined);
    expect(isActivated).toBeTrue();
  });
});
