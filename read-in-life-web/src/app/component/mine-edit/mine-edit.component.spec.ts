import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineEditComponent } from './mine-edit.component';

describe('MineEditComponent', () => {
  let component: MineEditComponent;
  let fixture: ComponentFixture<MineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
