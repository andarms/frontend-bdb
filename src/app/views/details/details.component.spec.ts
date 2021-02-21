import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: BdbDetailsComponent;
  let fixture: ComponentFixture<BdbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
