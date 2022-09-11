import { Card } from "src/model/card.model";
import { PersonalData } from "src/model/personal-data.model";
import { StringConstant } from "src/model/string.constants.model";

export class CardsService {

	private _cards:Card[]=[
		new Card("Contatti e social", [
			new PersonalData({key:"email principale",value:"psykedady@gmail.com", type:"email"}),
			new PersonalData({key:"email secondaria",value:"psdady@msn.com", type:"email"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Twitter",value:"twitter.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"github",value:"github.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"Telegram",value:"t.me/PsykeDady", type:"link"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Cellulare 1",value:"+39 3663148360", type:"tel"}),
			new PersonalData({key:"Cellulare 2",value:"+39 3274437030", type:"tel"}),
		]),
		new Card("Istruzione", [
			new PersonalData({key:"Conseguite", value:"", type:"label"}),
			new PersonalData({key:"2005 - 2011",value:StringConstant.DIPLOMA, type:"range"}),
			new PersonalData({key:"2011 - 2016",value:StringConstant.LAUREAT, type:"range"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Interrotte", value:"", type:"label"}),
			new PersonalData({key:"2016 - 2022",value:StringConstant.LAUREAM, type:"range"}),
		])
	];

	public get cards(){
		return this._cards;
	}

	public set cards(cards:Card[]){
		this.cards=cards;
	}

}