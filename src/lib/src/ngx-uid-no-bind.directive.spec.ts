import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxUidNoBindDirective } from './ngx-uid-no-bind.directive';
import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

@Component({
  template: `
  <input input1 [id]="inputId1.uid" type="checkbox">
  <label label1 [for]="inputId1.uid" ngxUidNoBind #inputId1="ngxUidNoBind">Check 1</label>

  <input input2 [id]="inputId2" type="checkbox">
  <label label2 [for]="inputId2" ngxUidNoBind #inputId2="ngxUidNoBind">Check 2</label>
  `,
})
class TestComponent { }

describe('NgxUidNoBindDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let label1: DebugElement;
  let input1: DebugElement;
  let label2: DebugElement;
  let input2: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxUidNoBindDirective],
      providers: [{ provide: NgxUidService, useClass: NgxUidDefaultService} ],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    label1 = fixture.debugElement.query(By.css('[label1]'));
    input1 = fixture.debugElement.query(By.css('[input1]'));
    label2 = fixture.debugElement.query(By.css('[label2]'));
    input2 = fixture.debugElement.query(By.css('[input2]'));
    fixture.detectChanges();
  });

  it('should generate unique ids', () => {
    expect(label1.nativeElement.htmlFor).toBeTruthy();
    expect(label2.nativeElement.htmlFor).toBeTruthy();
    expect(label1.nativeElement.htmlFor).not.toBe(input2.nativeElement.htmlFor);
  });

  it('should allow ids to be bound', () => {
    expect(label1.nativeElement.htmlFor).toBe(input1.nativeElement.id);
    expect(label2.nativeElement.htmlFor).toBe(input2.nativeElement.id);
  });

  it('should not set id', () => {
    expect(label1.nativeElement.id).toBeFalsy();
    expect(label2.nativeElement.id).toBeFalsy();
  });
});
