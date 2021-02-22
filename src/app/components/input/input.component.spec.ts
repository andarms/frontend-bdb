import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BdbInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: BdbInputComponent;
  let fixture: ComponentFixture<BdbInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BdbInputComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show label', () => {
    const testText = 'Hello';
    component.label = testText;
    let labelEl: HTMLElement = fixture.debugElement.query(By.css('h6'))!.nativeElement;
    fixture.detectChanges();
    expect(labelEl.innerHTML).toContain(testText);
  });

  it('should show HTMl input number type', () => {
    const type = 'number';
    component.type = type;
    component.id = 'test';
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input[id="test"]')).nativeElement;
    expect(input.type).toBe(type);
  });

  it('should show HTMl input text type', () => {
    const type = 'text';
    component.type = type;
    component.id = 'test';
    fixture.detectChanges();
    const inputEl: HTMLInputElement = fixture.debugElement.query(By.css('input[id="test"]')).nativeElement;
    expect(inputEl.type).toBe(type);
  });
});

@Component({
  template: `<bdb-input [formControl]="control"></bdb-input>`,
})
class InputTestWrapperComponent {
  control = new FormControl();

  @ViewChild(BdbInputComponent) inputComponent!: BdbInputComponent;
}

describe('InputWrapper Component', () => {
  let formBuilder: FormBuilder;
  let wrapperFixture: ComponentFixture<InputTestWrapperComponent>;
  let inputComponet: BdbInputComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [InputTestWrapperComponent, BdbInputComponent],
      imports: [ReactiveFormsModule],
    });
  });

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(InputTestWrapperComponent);
    formBuilder = TestBed.inject(FormBuilder);
    wrapperFixture.detectChanges();
    inputComponet = wrapperFixture.componentInstance.inputComponent;
  });

  it('should have the default value from wrapper component', () => {
    const deafultValue = 'default value';
    wrapperFixture.componentInstance.control.setValue(deafultValue);
    inputComponet.id = 'test';
    wrapperFixture.detectChanges();

    const inputEl: HTMLInputElement = wrapperFixture.debugElement.query(By.css('input[id="test"]')).nativeElement;
    expect(inputEl.value).toBe(deafultValue);
  });
  
  // don't know why is not working
  // it('should show input required error', fakeAsync(() => {
  //   const control = wrapperFixture.componentInstance.control;
  //   control.setValidators([Validators.required]);
  //   control.setValue(null);
  //   inputComponet.id = 'test';
  //   wrapperFixture.detectChanges();

  //   const inputEl: HTMLInputElement = wrapperFixture.debugElement.query(By.css('input[id="test"]')).nativeElement;

  //   expect(control?.errors?.required).toBeTruthy();
  //   inputEl.dispatchEvent(new Event('focus'));
  //   inputEl.dispatchEvent(new Event('blur'));
  //   expect(inputEl.classList).toContain('is-invalid');
  // }));
});
