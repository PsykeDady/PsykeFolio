import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CVStaticHeaderMobile } from './cvstatic/cvstatic-header-mobile/cvstatic-header-mobile.component';
import { CVStaticHeader } from './cvstatic/cvstatic-header/cvstatic-header.component';
import { CVStatic } from './cvstatic/cvstatic.component';

@NgModule({
  declarations: [
    AppComponent,
	CVStatic,
	CVStaticHeader,
	CVStaticHeaderMobile
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
