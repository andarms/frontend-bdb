import { Component, Input } from '@angular/core';

import { BdbBaseFormFieldComponent } from '../base-form-field/base-form-field';

@Component({
  selector: 'bdb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class BdbInputComponent extends BdbBaseFormFieldComponent {
  @Input() type: string = 'text';
  @Input() id: string = '';
}
