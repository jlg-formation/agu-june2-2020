import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<input type="text" appAutofocus>',
})
export class TestComponent {}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, AutofocusDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // focus ?
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    expect(input === document.activeElement).toBeTrue();
  });

});

