import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateImageComponent } from './generate-image.component';

describe('GenerateImageComponent', () => {
  let component: GenerateImageComponent;
  let fixture: ComponentFixture<GenerateImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
