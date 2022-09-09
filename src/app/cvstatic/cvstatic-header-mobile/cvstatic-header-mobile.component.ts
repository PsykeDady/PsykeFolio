import { Component } from "@angular/core";

@Component({
	selector:"cvstatic-header-mobile",
	templateUrl:"./cvstatic-header-mobile.component.html",
	styleUrls:["./cvstatic-header-mobile.component.css"]
}) export class CVStaticHeaderMobile {
	personal_data= [
		["","Davide Galati"],
		["Data di Nascita","28/07/1991"],
		["Luogo di Nascita","Soverato (CZ)"],
		["CF","GLTDVD91L28I872M"],
		["Residenza","Rende (CS)"]
	]

	constructor(){
		this.personal_data=this.personal_data.splice(1)
	}
}
