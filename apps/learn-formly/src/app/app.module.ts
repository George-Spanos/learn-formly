import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { FormlyMaterialModule } from '@ngx-formly/material'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
