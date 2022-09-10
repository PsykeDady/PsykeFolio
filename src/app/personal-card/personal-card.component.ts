import { Component, Input } from "@angular/core";
import { Card } from "src/model/card.model";

@Component({
	selector:"personal-card",
	templateUrl:'./personal-card.component.html',
	styleUrls:['./personal-card.component.css']
})
export class PersonalCard{
	
	@Input()
	card:Card=new Card("",[]); 

}