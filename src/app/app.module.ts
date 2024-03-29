import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LevelPipe } from 'src/pipe/levels.pipe';
import { MarkdownPipe } from 'src/pipe/markdown.pipe';
import { CardsService } from 'src/services/cards.service';
import { PersonalDataService } from 'src/services/personal-data.service';

import { AppComponent } from './app.component';
import { CVStaticHeaderDesktop } from './cvstatic/cvstatic-header/cvstatic-header-desktop/cvstatic-header-desktop.component';
import { CVStaticHeaderMobile } from './cvstatic/cvstatic-header/cvstatic-header-mobile/cvstatic-header-mobile.component';
import { CVStaticHeader } from './cvstatic/cvstatic-header/cvstatic-header.component';
import { CVStaticStickyBar } from './cvstatic/cvstatic-stickybar/cvstatic-stickybar.component';

import { CVStatic } from './cvstatic/cvstatic.component';
import { PersonalCardInfo } from './personal-card/personal-card-info/personal-card-info.component';
import { PersonalCard } from './personal-card/personal-card.component';
import { CvStaticQrcodeComponent } from './cvstatic/qrcode/cvstatic.qrcode.component';

@NgModule({
	declarations: [
		AppComponent,
		CVStatic,
		CVStaticHeader,
		CVStaticHeaderDesktop,
		CVStaticHeaderMobile,
		CVStaticStickyBar,
		PersonalCard,
		PersonalCardInfo,
		LevelPipe,
		MarkdownPipe,
  CvStaticQrcodeComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		PersonalDataService,
		CardsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
