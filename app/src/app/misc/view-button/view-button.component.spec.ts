import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewButtonComponent } from './view-button.component';

describe('ViewButtonComponent', () => {
  let component: ViewButtonComponent;
  let fixture: ComponentFixture<ViewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
