import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from './data.service';
import { startWith, switchMap } from 'rxjs/operators'
import { TranslateService } from '@ngx-translate/core';

export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ?
    null : { ip: true }
}

@Component({
  selector: 'learn-formly-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  param = { value: 'world' };
  title = 'learn-formly';
  form = new FormGroup({});
  model = {
    id: '1234',
    firstname: 'Juri',
    age: 34,
    nationId: 1,
    cityId: 1,
    ip: null
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'id'
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-3',
          key: 'firstname',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Firstname',
            required: true,
            appearance: 'outline'
          }
        },
        {
          className: 'flex-2',
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            appearance: 'outline',
            min: 18
          }
        },
      ]
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          key: 'nationId',
          type: 'select',
          templateOptions: {
            label: 'Nation',
            appearance: 'outline',
            options: this.data.getNations()
          }
        },
        {
          className: 'flex-2',
          key: 'cityId',
          type: 'select',
          templateOptions: {
            label: 'City',
            appearance: 'outline',
            options: [],
          },
          expressionProperties: {
            'templateOptions.disabled': (model) => !model.nationId,
            'model.cityId': '!model.nationId ? null : model.cityId'
          },
          hideExpression: (model) => !model.nationId,
          hooks: {
            onInit: (field: FormlyFieldConfig) => {
              field.templateOptions.options = field.form.get('nationId').valueChanges.pipe(
                startWith(this.model.nationId),
                switchMap(nationId => this.data.getCities(nationId))
              )
            }
          }
        },

      ]
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Ip Address',
        appearance: 'outline',
        required: true
      },
      validators: {
        validation: [IpValidator]
      }
    }
  ]
  constructor(private translate: TranslateService, private data: DataService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('gr');
  }

  onSubmit({ valid, value }) {
    console.log(valid, value)
  }
}
