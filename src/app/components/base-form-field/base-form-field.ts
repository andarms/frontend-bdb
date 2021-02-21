import { Component, forwardRef, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, DefaultValueAccessor } from '@angular/forms';

import { validationMessages } from './validation-messages';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => BdbBaseFormFieldComponent),
  multi: true,
};

@Component({
  template: '',
})
export class BdbBaseFormFieldComponent implements ControlValueAccessor {
  @Input() label = '';
  bridgeControl = new FormControl();
  invalid!: boolean | null;
  disabled: any;

  private onTouch = () => {};
  private onChange = (_: any) => {};
  private errorMessages = validationMessages;

  constructor(@Optional() @Self() public control: NgControl) {
    if (control != null) {
      control.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    this.bridgeControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  update() {
    this.onTouch();
    this.onChange(this.bridgeControl.value);
  }

  get showError(): boolean {
    if (!this.control) {
      return false;
    }
    const { dirty, touched } = this.control;
    return this.control.invalid ? dirty! || touched! : false;
  }

  get errors(): any[] {
    if (!this.control) {
      return [];
    }

    const { errors } = this.control;
    if (!errors) return [];
    return Object.keys(errors!).map((key: string) => (this.errorMessages.hasOwnProperty(key) ? this.errorMessages[key]() : key));
  }
}
