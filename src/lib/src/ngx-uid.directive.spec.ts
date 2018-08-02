import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgxUidDirective } from './ngx-uid.directive';
import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

@Component({
  template: `
  <input input1 ngxUid #inputId1="ngxUid" type="checkbox">
  <label label1 [for]="inputId1.uid">Check 1</label>

  <input input2 ngxUid #inputId2="ngxUid" type="checkbox">
  <label label2 [for]="inputId2">Check 2</label>
  `,
})
class TestComponent { }

describe('NgxUidDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let label1: DebugElement;
  let input1: DebugElement;
  let label2: DebugElement;
  let input2: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxUidDirective],
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

  it('should set unique ids', () => {
    expect(input1.nativeElement.id).toBeTruthy();
    expect(input2.nativeElement.id).toBeTruthy();
    expect(input1.nativeElement.id).not.toBe(input2.nativeElement.id);
  });

  it('should allow ids to be bound', () => {
    expect(label1.nativeElement.htmlFor).toBe(input1.nativeElement.id);
    expect(label2.nativeElement.htmlFor).toBe(input2.nativeElement.id);
  });
});
