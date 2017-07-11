import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToComponent } from './navigate-to.component';

describe('NavigateToComponent', () => {
  let component: NavigateToComponent;
  let fixture: ComponentFixture<NavigateToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
