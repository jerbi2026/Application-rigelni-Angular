import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagebloqueeComponent } from './pagebloquee.component';

describe('PagebloqueeComponent', () => {
  let component: PagebloqueeComponent;
  let fixture: ComponentFixture<PagebloqueeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagebloqueeComponent]
    });
    fixture = TestBed.createComponent(PagebloqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
