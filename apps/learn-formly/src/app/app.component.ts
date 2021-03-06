import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'learn-formly-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-formly';
  form = new FormGroup({});
  model = {
    firstname: 'Juri',
    age: 34
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Firstname',
        appearance: 'outline'
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Age',
        appearance: 'outline'
      }
    },

  ]
  onSubmit({ valid, value }) {
    console.log(value)
  }
}
