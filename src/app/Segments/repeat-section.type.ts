import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"
      [model]="model[i]"
      [options]="options"
      [form]="formControl"></formly-field>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
