import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationProvider } from '../../../providers/validation/validation';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage !== null" class="error">{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  @Input() submitAttempt: boolean;
  @Input() Name: string;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (!this.control.valid && this.submitAttempt && (this.control.dirty || this.submitAttempt)) {
        return ValidationProvider.getValidatorErrorMessage(this.Name, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}