import { Card } from "src/model/card.model";
import { PersonalData } from "src/model/personal-data.model";
import { StringConstant } from "src/model/string.constants.model";

export class CardsService {

	private _cards:Card[]=[
		new Card("Stato attuale e contatti", "fa fa-id-card",[
			new PersonalData({key:"Contatti",value:"Email",type:"label"}),
			new PersonalData({key:"email 1",value:"psykedady@gmail.com", type:"email",halfcolumn:true}),
			new PersonalData({key:"email 2",value:"psdady@msn.com", type:"email",halfcolumn:true}),
			new PersonalData({key:"Tel 1",value:"+39 3663148360", type:"tel",halfcolumn:true}),
			new PersonalData({key:"Tel 2",value:"+39 3274437030", type:"tel",halfcolumn:true}),
			new PersonalData({key:"Social",value:"Social",type:"label"}),
			new PersonalData({key:"Twitter",value:"twitter.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"github",value:"github.com/PsykeDady",halfcolumn:true, type:"link"}),
			new PersonalData({key:"Telegram",value:"t.me/PsykeDady", type:"link",halfcolumn:true}),
			PersonalData.EMPTY,
			new PersonalData({key:"Stato attuale",value:"Stato attuale",type:"label"}),
			new PersonalData({key:"Attuale Occupazione",value:"*Sviluppatore Junior Fullstack* presso **MOVEO**"}),
			new PersonalData({key:"Livello di istruzione",value:"*Laurea Triennale* in **Ingegneria Informatica** presso **Unical**"}),
		]),
		new Card("Istruzione", "fa fa-book",[
			new PersonalData({key:"Conseguite", value:"Conseguite", type:"label"}),
			new PersonalData({key:"2011 - 2016",value:StringConstant.LAUREAT, type:"range"}),
			new PersonalData({key:"2005 - 2011",value:StringConstant.DIPLOMA, type:"range"}),
			new PersonalData({key:"Certificazioni", value:"Certificazioni", type:"label"}),
			new PersonalData({key:"2023",value:"Certificazione React.js", type:"range", others_label:"Note:", others:[
				"Codice certificazione 1NFZB63O76",
				"[Link verifica Certificazione React.js](https://verify.w3schools.com/1NFZB63O76)"
			]}),
			new PersonalData({key:"2022",value:"Certificazione Angular Intermediate Developer", type:"range", others_label:"Note:", others:[
				"Codice certificazione 3G20ISA",
				"[Link verifica Certificazione Angular](https://interstate21.com/certification/check.html)"
			]}),
			PersonalData.PBREAK,
			new PersonalData({key:"Interrotte", value:"Interrotte", type:"label"}),
			new PersonalData({key:"2016 - 2022",value:StringConstant.LAUREAM, type:"range"}),
		]),
		new Card("Esperienze Lavorative", "fa fa-briefcase",[
			new PersonalData({key:"2021 - in corso", value:StringConstant.MOVEO, type:"range", others: StringConstant.MOVEO_OTHERS}),
			new PersonalData({key:"2020 - 2021", value:StringConstant.PCCUBE, type:"range", others: StringConstant.PCCUBE_OTHERS}),
			new PersonalData({key:"Altre esperienze lavorative", value:"Altre esperienze lavorative", type:"label"}),
			new PersonalData({key:"2017 - 2018", value:StringConstant.FORESTAINCANTATA, type:"range", others: StringConstant.FORESTAINCANTATA_OTHERS}),
		]),
		new Card("Altre esperienze in ambito IT", "fa fa-laptop",[
			new PersonalData({key:"2022 - in corso", value:StringConstant.HTMLIT, type:"range", others: StringConstant.HTMLIT_OTHERS}),
			new PersonalData({key:"2019 - in corso", value:StringConstant.LINUXHUB, type:"range", others: StringConstant.LINUXHUB_OTHERS}),
		]),
		new Card("Competenze Linguistiche", "fa fa-language",[
			new PersonalData({key:"Italiano (Madrelingua)",value:"Italiano (Madrelingua)",type:"label"}),
			new PersonalData({key:"Reading", value:"4", type:"skill"}),
			new PersonalData({key:"Writing", value:"4", type:"skill"}),
			new PersonalData({key:"Listening", value:"4", type:"skill"}),
			new PersonalData({key:"Speaking", value:"4", type:"skill"}),
			new PersonalData({key:"Inglese (equivalente non certificato B1)",value:"Inglese (equivalente non certificato B1)",type:"label"}),
			new PersonalData({key:"Reading", value:"3", type:"skill"}),
			new PersonalData({key:"Writing", value:"2", type:"skill"}),
			new PersonalData({key:"Listening", value:"1", type:"skill"}),
			new PersonalData({key:"Speaking", value:"2", type:"skill"}),
		]),
		new Card("Skills", "fa fa-pie-chart",[
			new PersonalData({key:"Linguaggi principali", value:"Linguaggi principali", type:"label"}),
			new PersonalData({key:"Java (versioni da 6 a 14)", value:"4", type:"skill"}),
			new PersonalData({key:"python (versione 3)", value:"2", type:"skill"}),
			new PersonalData({key:"Javascript (strict mode)", value:"3", type:"skill"}),
			new PersonalData({key:"Typescript", value:"3", type:"skill"}),
			new PersonalData({key:"Framework e librerie", value:"Framework e librerie", type:"label"}),
			new PersonalData({key:"Angular 2 (v 13)", value:"3", type:"skill"}),
			new PersonalData({key:"Spring/Springboot", value:"2", type:"skill"}),
			new PersonalData({key:"React JS e Redux", value:"1", type:"skill"}),
			new PersonalData({key:"Programmazione script di sistema", value:"Programmazione script di sistema", type:"label"}),
			new PersonalData({key:"bash,zsh,sh e POSIX Standard", value:"4", type:"skill"}),
			new PersonalData({key:"awk", value:"3", type:"skill"}),
			new PersonalData({key:"sed", value:"1", type:"skill"}),
			new PersonalData({key:"Databases", value:"Databases", type:"label"}),
			new PersonalData({key:"MySQL", value:"2", type:"skill"}),
			new PersonalData({key:"PLSQL", value:"2", type:"skill"}),
			new PersonalData({key:"Modellazione", value:"Modellazione", type:"label"}),
			new PersonalData({key:"UML", value:"2", type:"skill"}),
			PersonalData.PBREAK,
			new PersonalData({key:"Linguaggi di Markup", value:"Linguaggi di Markup", type:"label"}),
			new PersonalData({key:"HTML+CSS", value:"3", type:"skill"}),
			new PersonalData({key:"Markdown", value:"4", type:"skill"}),
			new PersonalData({key:"Versioning", value:"Versioning", type:"label"}),
			new PersonalData({key:"git", value:"3", type:"skill"}),
			new PersonalData({key:"Tool usati", value:"Tool usati", type:"label"}),
			new PersonalData({key:"eclipse", value:"3", type:"skill"}),
			new PersonalData({key:"Visual Studio Code", value:"4", type:"skill"}),
			new PersonalData({key:"CMS", value:"CMS", type:"label"}),
			new PersonalData({key:"Magnolia", value:"2", type:"skill"}),
			new PersonalData({key:"Adobe AEM", value:"1", type:"skill"}),
			new PersonalData({key:"Web Server", value:"Web Server", type:"label"}),
			new PersonalData({key:"Tomcat", value:"3", type:"skill"}),
			new PersonalData({key:"Liberty Server (IBM)", value:"2", type:"skill"}),
			new PersonalData({key:"Websphere 8.5", value:"1", type:"skill"}),
		]),
		new Card ("Altre competenze digitali","fa fa-keyboard-o",[
			new PersonalData({key:"Manipolazione digitale", value:"Manipolazione digitale", type:"label"}),
			new PersonalData({key:"Gimp (formati immagine)", value:"3", type:"skill"}),
			new PersonalData({key:"Inkscape (formati immagine vettoriali)", value:"2", type:"skill"}),
			new PersonalData({key:"audacity (formati audio)", value:"3", type:"skill"}),
			new PersonalData({key:"Olive editor (formati video)", value:"1", type:"skill"}),
			new PersonalData({key:"Blender (render 3D)", value:"1", type:"skill"}),
		]),
		new Card("Interessi e hobby","fa fa-linux",[
			new PersonalData({key:"",value:"Utilizzatore quotidiano di sistemi GNU/Linux ( btw I use Arch )",type:"hobby"}),
			new PersonalData({key:"",value:"Utilizzatore occasionale di sistemi Microsoft Windows",type:"hobby"}),
			new PersonalData({key:"",value:"Utilizzatore occasionale di sistemi MacOS / OSX",type:"hobby"}),
			new PersonalData({key:"",value:"Editore e Capo redattore di [LinuxHub](https://linuxhub.it/info) e appassionato delle tecnologie open source",type:"hobby"}),
			new PersonalData({key:"",value:"Mi diletto nell’editing di foto e disegni (lavori su [DevianArt](https://www.deviantart.com/PsykeDady))",type:"hobby"}),
			new PersonalData({key:"",value:"Bassista a livello amatoriale",type:"hobby"}),
		])
	];

	public get cards(){
		return this._cards;
	}

	public set cards(cards:Card[]){
		this.cards=cards;
	}

}