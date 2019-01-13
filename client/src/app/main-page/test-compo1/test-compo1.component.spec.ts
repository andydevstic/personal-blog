import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompo1Component } from './test-compo1.component';

describe('TestCompo1Component', () => {
  let component: TestCompo1Component;
  let fixture: ComponentFixture<TestCompo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
