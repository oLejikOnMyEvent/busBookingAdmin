import { Component} from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';


@Component({
  selector: 'formly-repeat-section',
  template: `
      <formly-group *ngFor="let segments of field.fieldGroup let i=index"
        [model]="model[i]"
        [field]="field"
        [form]="formControl">
      </formly-group>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
