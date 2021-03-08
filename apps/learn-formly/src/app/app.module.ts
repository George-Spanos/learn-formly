import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormlyFieldConfig, FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { dataCyExtension } from './data-cy.extension';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgSelectFormlyComponent } from './ng-select.type';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerTransaleExtention } from './transalte.extenstion';

export function minValidationMessage(err, field: FormlyFieldConfig) {
  console.log(err, field);
  return `Please provide a value bigger than ${err.min}. You provided ${err.actual}`
}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, NgSelectFormlyComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required.'
        },
        {
          name: 'min',
          message: minValidationMessage
        },
        {
          name: 'ip',
          message: 'Please type a valid ip address'
        }
      ],
      types: [
        {
          name: 'my-autocomplete',
          component: NgSelectFormlyComponent
        }
      ],
      extensions: [
        {
          name: 'data-cy-extension',
          extension: dataCyExtension
        }
      ]
    }),
    FormlyMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: FORMLY_CONFIG, multi: true, useFactory: registerTransaleExtention, deps: [TranslateService]
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
