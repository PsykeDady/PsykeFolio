import { Component } from "@angular/core";
import { Card } from "src/model/card.model";
import { CardsService } from "src/services/cards.service";

@Component({
	selector:"cvstatic-stickybar",
	templateUrl:"./cvstatic-stickybar.component.html",
	styleUrls:['./cvstatic-stickybar.component.css']
})
export class CVStaticStickyBar {

	constructor(public cardsService : CardsService){

	}

	scrollToCard(card:Card):void{
		let cardEl :  HTMLElement | null = document.getElementById(`card-${card.title.split(' ').join('-')}`)
		let adjust=100
		console.log("scroll to card")
		if(cardEl!=null){
			if(scrollY!=0){
				new Promise(()=>{
					scrollTo(0,0);
					setTimeout(()=>{
						this.scrollToCard(card)
						console.log("scrolltime")
					},900)
				});
			} else {
				console.log(cardEl.id)
				let mytop:number=cardEl.getBoundingClientRect().top;
				console.log(mytop);
				mytop=mytop-adjust
				console.log(mytop);
				mytop=mytop<0?0:mytop;
				console.log(mytop);
				scrollTo({top:mytop})
			}
		}
	}
}