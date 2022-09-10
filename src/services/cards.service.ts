import { Card } from "src/model/card.model";
import { PersonalData } from "src/model/personal-data.model";

export class CardsService {

	private _cards:Card[]=[
		new Card("Contatti e social", [
			new PersonalData({key:"email principale",value:"psykedady@gmail.com"}),
			new PersonalData({key:"email secondaria",value:"psdady@msn.com"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Twitter",value:"https://twitter.com/PsykeDady",halfcolumn:true}),
			new PersonalData({key:"github",value:"github.com/PsykeDady",halfcolumn:true}),
			new PersonalData({key:"Telegram",value:"t.me/PsykeDady"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Cellulare 1",value:"+39 3663148360"}),
			new PersonalData({key:"Cellulare 2",value:"+39 3274437030"}),
		])
	];

	public get cards(){
		return this._cards;
	}

	public set cards(cards:Card[]){
		this.cards=cards;
	}

}