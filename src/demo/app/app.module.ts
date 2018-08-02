import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUidModule }  from 'ngx-uid';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgxUidModule.forRoot()],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
