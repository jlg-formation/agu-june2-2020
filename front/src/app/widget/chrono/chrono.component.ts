import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    interval(1000)
      .pipe(
        map((n) => n + 1),
        startWith(0)
      )
      .subscribe(this.duration$);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe({
        next: (event) => {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
          this.subscription = interval(1000)
            .pipe(
              map((n) => n + 1),
              startWith(0)
            )
            .subscribe(this.durationRoute$);
        },
      });
  }
}
