import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCoverComponent } from './post-cover.component';

describe('PostCoverComponent', () => {
  let component: PostCoverComponent;
  let fixture: ComponentFixture<PostCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
