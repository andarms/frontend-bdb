import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: BdbTableComponent;
  let fixture: ComponentFixture<BdbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
