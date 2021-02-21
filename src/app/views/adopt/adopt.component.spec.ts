import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbAdoptComponent } from './adopt.component';

describe('AdoptComponent', () => {
  let component: BdbAdoptComponent;
  let fixture: ComponentFixture<BdbAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbAdoptComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
