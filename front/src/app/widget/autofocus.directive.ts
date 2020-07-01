import { Directive, OnDestroy, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnDestroy, OnInit {
  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('directive autofocus instantiated...');
  }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }

  ngOnDestroy(): void {
    console.log('directive autofocus destroy');
  }
}
