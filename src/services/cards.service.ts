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
			new PersonalData({key:"2022",value:"Certificazione Angular Intermediate Developer", type:"range", others_label:"Note:", others:[
				"Codice certificazione 3G20ISA",
				"[Link verifica Certificazione Angular](interstate21.com/certification/check.html)"
			]}),
			// new PersonalData({key:"Link verifica Certificazione Angular",value:"interstate21.com/certification/check.html", type:"link", others:['Codice certificazione 3G20ISA']}),
			// PersonalData.H_SEP,
			new PersonalData({key:"Interrotte", value:"Interrotte", type:"label"}),
			new PersonalData({key:"2016 - 2022",value:StringConstant.LAUREAM, type:"range"}),
		]),
		new Card("Esperienze Lavorative", [
			new PersonalData({key:"2017 - 2018", value:StringConstant.FORESTAINCANTATA, type:"range", others: StringConstant.FORESTAINCANTATA_OTHERS}),
			new PersonalData({key:"2020 - 2021", value:StringConstant.PCCUBE, type:"range", others: StringConstant.PCCUBE_OTHERS}),
			new PersonalData({key:"2021 - 2023", value:StringConstant.MOVEO, type:"range", others: StringConstant.MOVEO_OTHERS}),
		]),
		new Card("Altre esperienze in ambito IT", [
			new PersonalData({key:"2019 - in corso", value:StringConstant.LINUXHUB, type:"range", others: StringConstant.LINUXHUB_OTHERS}),
			new PersonalData({key:"2022 - in corso", value:StringConstant.HTMLIT, type:"range", others: StringConstant.HTMLIT_OTHERS})
		]),
		new Card("Competenze Linguistiche", [
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
		new Card("Skills", [
			new PersonalData({key:"Competenze informatiche e teoriche di base", value:"Competenze informatiche e teoriche di base", type:"label"}),
			new PersonalData({key:"Programmazione a basso livello", value:"3", type:"skill"}),
			new PersonalData({key:"Architetture di rete", value:"2", type:"skill"}),
			new PersonalData({key:"Modellazione e progettazione di sistemi software", value:"3", type:"skill"}),
			new PersonalData({key:"Modellazione e progettazione di sistemi informativi", value:"2", type:"skill"}),
			new PersonalData({key:"Programmazione di sistemi integrati Arduino e ATMega", value:"1", type:"skill"}),
			new PersonalData({key:"Gestione sistemi UNIX", value:"4", type:"skill"}),
			new PersonalData({key:"Database e DBMS", value:"2", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Programmazione ad alto livello", value:"Programmazione ad alto livello", type:"label"}),
			new PersonalData({key:"Java (versioni da 6 a 14)", value:"4", type:"skill"}),
			new PersonalData({key:"python (versione 3)", value:"2", type:"skill"}),
			new PersonalData({key:"Javascript (strict mode)", value:"3", type:"skill"}),
			new PersonalData({key:"Typescript", value:"3", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Programmazione a basso livello", value:"Programmazione a basso livello", type:"label"}),
			new PersonalData({key:"c", value:"3", type:"skill"}),
			new PersonalData({key:"Assembly (x86 e x64 sintassi INTEL)", value:"2", type:"skill"}),
			new PersonalData({key:"Arduino", value:"1", type:"skill"}),
			new PersonalData({key:"Assembly (sintassi ATMEGA)", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Framework e librerie", value:"Framework e librerie", type:"label"}),
			new PersonalData({key:"Angular 2 (v 13)", value:"3", type:"skill"}),
			new PersonalData({key:"Spring/Springboot", value:"2", type:"skill"}),
			new PersonalData({key:"React JS", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Programmazione script di sistema", value:"Programmazione script di sistema", type:"label"}),
			new PersonalData({key:"bash,zsh,sh e POSIX Standard", value:"4", type:"skill"}),
			new PersonalData({key:"awk", value:"3", type:"skill"}),
			new PersonalData({key:"sed", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Databases", value:"Databases", type:"label"}),
			new PersonalData({key:"MySQL", value:"2", type:"skill"}),
			new PersonalData({key:"PLSQL", value:"2", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Modellazione", value:"Modellazione", type:"label"}),
			new PersonalData({key:"UML", value:"2", type:"skill"}),
			new PersonalData({key:"Reti P/T", value:"2", type:"skill"}),
			new PersonalData({key:"Automi a tempo", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Linguaggi di Markup", value:"Linguaggi di Markup", type:"label"}),
			new PersonalData({key:"HTML+CSS", value:"3", type:"skill"}),
			new PersonalData({key:"Markdown", value:"4", type:"skill"}),
			new PersonalData({key:"XML", value:"2", type:"skill"}),
			new PersonalData({key:"LaTeX", value:"2", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Versioning", value:"Versioning", type:"label"}),
			new PersonalData({key:"git", value:"3", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Tool usati", value:"Tool usati", type:"label"}),
			new PersonalData({key:"eclipse", value:"3", type:"skill"}),
			new PersonalData({key:"Visual Studio Code", value:"4", type:"skill"}),
			new PersonalData({key:"matlab/octave", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"CMS", value:"CMS", type:"label"}),
			new PersonalData({key:"Magnolia", value:"2", type:"skill"}),
			new PersonalData({key:"Adobe AEM", value:"1", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Web Server", value:"Web Server", type:"label"}),
			new PersonalData({key:"Tomcat", value:"3", type:"skill"}),
			new PersonalData({key:"Liberty Server (IBM)", value:"2", type:"skill"}),
			new PersonalData({key:"Websphere 8.5", value:"1", type:"skill"}),
		]),
		new Card ("Altre Competenze",[
			new PersonalData({key:"Suite d'ufficio", value:"Suite d'ufficio", type:"label"}),
			new PersonalData({key:"Libreoffice writer /Microsoft word", value:"4", type:"skill"}),
			new PersonalData({key:"Libreoffice calc /Microsoft excel", value:"3", type:"skill"}),
			new PersonalData({key:"Libreoffice base /Microsoft access", value:"3", type:"skill"}),
			new PersonalData({key:"Libreoffice impress /Microsoft powerpoint", value:"4", type:"skill"}),
			new PersonalData({key:"Libreoffice math", value:"4", type:"skill"}),
			new PersonalData({key:"Libreoffice draw", value:"3", type:"skill"}),
			PersonalData.H_SEP,
			new PersonalData({key:"Manipolazione digitale", value:"Manipolazione digitale", type:"label"}),
			new PersonalData({key:"Gimp (formati immagine)", value:"3", type:"skill"}),
			new PersonalData({key:"Inkscape (formati immagine vettoriali)", value:"2", type:"skill"}),
			new PersonalData({key:"audacity (formati audio)", value:"3", type:"skill"}),
			new PersonalData({key:"Olive editor (formati video)", value:"1", type:"skill"}),
			new PersonalData({key:"Blender (render 3D)", value:"1", type:"skill"}),
		]),
		new Card("Interessi e hobby",[
			new PersonalData({key:"",value:"Utilizzatore quotidiano di sistemi GNU/Linux ( btw I use Arch )",type:"hobby"}),
			new PersonalData({key:"",value:"Utilizzatore occasionale di sistemi Microsoft Windows",type:"hobby"}),
			new PersonalData({key:"",value:"Utilizzatore occasionale di sistemi MacOS / OSX",type:"hobby"}),
			new PersonalData({key:"",value:"Editore e Capo redattore di [LinuxHub](https://linuxhub.it/info) e appassionato delle tecnologie open source",type:"hobby"}),
			new PersonalData({key:"",value:"Mi diletto amatorialmente nell’editing di foto e disegni (lavori su [DevianArt](https://www.deviantart.com/PsykeDady)",type:"hobby"}),
			new PersonalData({key:"",value:"Musicista a livello amatoriale",type:"hobby"}),
			new PersonalData({key:"Basso",value:"3",type:"skill"}),
			new PersonalData({key:"Chitarra",value:"1",type:"skill"}),
			new PersonalData({key:"",value:"Cucina a livello amatoriale, appassionato negli azzardi e nella cucina provocatoria",type:"hobby"}),
		])
	];

	public get cards(){
		return this._cards;
	}

	public set cards(cards:Card[]){
		this.cards=cards;
	}

}