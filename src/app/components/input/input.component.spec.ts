import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdcInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: BdcInputComponent;
  let fixture: ComponentFixture<BdcInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdcInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
