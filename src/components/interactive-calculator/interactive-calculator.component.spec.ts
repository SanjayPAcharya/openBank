import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveCalculatorComponent } from './interactive-calculator.component';

describe('InteractiveCalculatorComponent', () => {
  let component: InteractiveCalculatorComponent;
  let fixture: ComponentFixture<InteractiveCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
