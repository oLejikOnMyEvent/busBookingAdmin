import { Component} from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';


@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let segments of filed.fieldGroup let i=index">
      <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
      </formly-group>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
