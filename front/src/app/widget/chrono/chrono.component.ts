import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { interval, BehaviorSubject, Subscription } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent implements OnInit {
  duration$ = new BehaviorSubject<number>(0);
  durationRoute$ = new BehaviorSubject<number>(0);
  subscription: Subscription;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      console.log('start observable');
      interval(1000)
        .pipe(
          map((n) => n + 1),
          startWith(0)
        )
        .subscribe((n) => {
          this.duration$.next(n);
          this.changeDetectorRef.detectChanges();
        });
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe({
        next: (event) => {
          this.ngZone.runOutsideAngular(() => {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
            this.subscription = interval(1000)
              .pipe(
                map((n) => n + 1),
                startWith(0)
              )
              .subscribe((n) => {
                this.durationRoute$.next(n);
                this.changeDetectorRef.detectChanges();
              });
          });
        },
      });
  }
}
