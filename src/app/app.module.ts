import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CVStaticHeader } from './cvstatic/cvstatic-header/cvstatic-header.component';
import { CVStatic } from './cvstatic/cvstatic.component';

@NgModule({
  declarations: [
    AppComponent,
	CVStatic,
	CVStaticHeader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
