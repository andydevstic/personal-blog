import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompo2Component } from './test-compo2.component';

describe('TestCompo2Component', () => {
  let component: TestCompo2Component;
  let fixture: ComponentFixture<TestCompo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
