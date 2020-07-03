import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { ChronoComponent } from './chrono/chrono.component';
import { ClockPipe } from './clock.pipe';



@NgModule({
  declarations: [EllipsisPipe, AutofocusDirective, ChronoComponent, ClockPipe],
  imports: [
    CommonModule
  ],
  exports: [EllipsisPipe, AutofocusDirective, ChronoComponent, ClockPipe]
})
export class WidgetModule { }
