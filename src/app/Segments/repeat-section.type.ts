// import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
   {{ model.stationsNumber }}
      <formly-field 
      class="col"
      [field]="field"
      [model]="model"
  ></formly-field>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {}
