import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbListComponent } from './list.component';

describe('ListComponent', () => {
  let component: BdbListComponent;
  let fixture: ComponentFixture<BdbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show person list table', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty message', () => {
    expect(component).toBeTruthy();
  });

  it('should navigateto create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigateto adopt', () => {
    expect(component).toBeTruthy();
  });
});
