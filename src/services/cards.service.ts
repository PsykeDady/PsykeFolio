import { Card } from "src/model/card.model";
import { PersonalData } from "src/model/personal-data.model";
import { StringConstant } from "src/model/string.constants.model";

export class CardsService {

	private _cards:Card[]=[
		new Card("Contatti e social", [
			new PersonalData({key:"email 1",value:"psykedady@gmail.com", type:"email",halfcolumn:true}),
			PersonalData.EMPTY,
			new PersonalData({key:"email 2",value:"psdady@msn.com", type:"email",halfcolumn:true}),
			PersonalData.EMPTY,
			PersonalData.H_SEP,
			new PersonalData({key:"Twitter",value:"twitter.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"github",value:"github.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"Telegram",value:"t.me/PsykeDady", type:"link",halfcolumn:true}),
			PersonalData.EMPTY,
			PersonalData.H_SEP,
			new PersonalData({key:"Tel 1",value:"+39 3663148360", type:"tel",halfcolumn:true}),
			PersonalData.EMPTY,
			new PersonalData({key:"Tel 2",value:"+39 3274437030", type:"tel",halfcolumn:true}),
			PersonalData.EMPTY,
		]),
		new Card("Istruzione", [
			new PersonalData({key:"Conseguite", value:"Conseguite", type:"label"}),
			new PersonalData({key:"2005 - 2011",value:StringConstant.DIPLOMA, type:"range"}),
			new PersonalData({key:"2011 - 2016",value:StringConstant.LAUREAT, type:"range"}),
			new PersonalData({key:"2022",value:"Certificazione Angular Intermediate Developer", type:"range"}),
			new PersonalData({key:"Link verifica Certificazione",value:"interstate21.com/certification/check.html", type:"link", others:['Codice certificazione 3G20ISA']}),
			PersonalData.H_SEP,
			new PersonalData({key:"Interrotte", value:"Interrotte", type:"label"}),
			new PersonalData({key:"2016 - 2022",value:StringConstant.LAUREAM, type:"range"}),
		]),
		new Card("Esperienze Lavorative", [
			new PersonalData({key:"2017 - 2018", value:StringConstant.FORESTAINCANTATA, type:"range", others: StringConstant.FORESTAINCANTATA_OTHERS}),
			new PersonalData({key:"2020 - 2021", value:StringConstant.PCCUBE, type:"range", others: StringConstant.PCCUBE_OTHERS}),
			new PersonalData({key:"2021 - 2023", value:StringConstant.MOVEO, type:"range", others: StringConstant.MOVEO_OTHERS}),
		]),
		new Card("Skills", [
			new PersonalData({key:"Competenze informatiche e teoriche di base", value:"Competenze informatiche e teoriche di base", type:"label"}),
			new PersonalData({key:"Programmazione a basso livello", value:"3", type:"skill"}),
			new PersonalData({key:"Architetture di rete", value:"2", type:"skill"}),
			new PersonalData({key:"Modellazione e progettazione di sistemi software", value:"3", type:"skill"}),
			new PersonalData({key:"Modellazione e progettazione di sistemi informativi", value:"2", type:"skill"}),
			new PersonalData({key:"Programmazione di sistemi integrati Arduino e ATMega", value:"1", type:"skill"}),
			new PersonalData({key:"Gestione sistemi UNIX", value:"4", type:"skill"}),
			new PersonalData({key:"Database e DBMS", value:"2", type:"skill"}),
			new PersonalData({key:"Test Full", value:"4", type:"skill"}),
			new PersonalData({key:"Test Empty", value:"0", type:"skill"}),
		])
	];

	public get cards(){
		return this._cards;
	}

	public set cards(cards:Card[]){
		this.cards=cards;
	}

}