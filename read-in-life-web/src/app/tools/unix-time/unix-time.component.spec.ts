import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixTimeComponent } from './unix-time.component';

describe('UnixTimeComponent', () => {
  let component: UnixTimeComponent;
  let fixture: ComponentFixture<UnixTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnixTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
