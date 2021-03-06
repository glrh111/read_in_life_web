import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailedComponent } from './post-detailed.component';

describe('PostDetailedComponent', () => {
  let component: PostDetailedComponent;
  let fixture: ComponentFixture<PostDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
