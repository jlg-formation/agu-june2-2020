import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clock',
})
export class ClockPipe implements PipeTransform {
  transform(value: number): string {
    const seconds = ('' + (value % 60)).padStart(2, '0');
    const minutes = ('' + Math.floor(value / 60)).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
