import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredMedComponent } from './pred-med.component';

describe('PredMedComponent', () => {
  let component: PredMedComponent;
  let fixture: ComponentFixture<PredMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PredMedComponent]
    });
    fixture = TestBed.createComponent(PredMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
