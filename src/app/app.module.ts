import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonalDataService } from 'src/services/personal-data.service';

import { AppComponent } from './app.component';
import { CVStaticHeaderDesktop } from './cvstatic/cvstatic-header/cvstatic-header-desktop/cvstatic-header-desktop.component';
import { CVStaticHeaderMobile } from './cvstatic/cvstatic-header/cvstatic-header-mobile/cvstatic-header-mobile.component';
import { CVStaticHeader } from './cvstatic/cvstatic-header/cvstatic-header.component';

import { CVStatic } from './cvstatic/cvstatic.component';

@NgModule({
	declarations: [
		AppComponent,
		CVStatic,
		CVStaticHeader,
		CVStaticHeaderDesktop,
		CVStaticHeaderMobile
	],
	imports: [
		BrowserModule
	],
	providers: [
		PersonalDataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
