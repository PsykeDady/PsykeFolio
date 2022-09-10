import { Component } from "@angular/core";
import { Card } from "src/model/card.model";
import { CardsService } from "src/services/cards.service";

@Component({
	selector:"cvstatic",
	templateUrl:"./cvstatic.component.html",
	styleUrls:["./cvstatic.component.css"]
}) export class CVStatic {
	cards:Card[]=[];
	constructor(cardService:CardsService){
		this.cards=cardService.cards;
	}
}