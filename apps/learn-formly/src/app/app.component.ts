import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from './data.service';

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
    age: 34,
    nationId: 1
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Firstname',
        appearance: 'outline'
      },
      hooks: {
        onInit: ((field: FormlyFieldConfig)  => {
          field.templateOptions.label = 'Firstname Changed'
        })
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
        appearance: 'outline'
      }
    },
    {
      key: 'nationId',
      type: 'select',
      templateOptions: {
        label: 'Nation',
        appearance: 'outline',
        options: this.data.getNations()
      }
    },

  ]
  constructor(private data: DataService) { }

  onSubmit({ valid, value }) {
    console.log(value)
  }
}
