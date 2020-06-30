import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'World';

  constructor() {
    setTimeout(() => {
      this.name = 'coucou';
    }, 2000);
  }
}
