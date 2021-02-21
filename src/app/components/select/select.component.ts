import { Component, Input, OnInit } from '@angular/core';

import { BdbBaseFormFieldComponent } from '../base-form-field/base-form-field';

export interface OptionValue {
  label: string;
  value: any;
}

@Component({
  selector: 'bdb-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends BdbBaseFormFieldComponent {
  @Input() options: OptionValue[] = [];
}
