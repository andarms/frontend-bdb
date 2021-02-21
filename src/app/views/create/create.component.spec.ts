import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: BdbCreateComponent;
  let fixture: ComponentFixture<BdbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
