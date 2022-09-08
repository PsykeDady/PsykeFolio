import { Component } from "@angular/core";

@Component({
	selector:"cvstatic-header",
	templateUrl:"./cvstatic-header.component.html",
	styleUrls:["./cvstatic-header.component.css"]
}) export class CVStaticHeader {
	personal_data= [
		["","Davide Galati"],
		["Data di Nascita","28/07/1991"],
		["Luogo di Nascita","Soverato (CZ)"],
		["CF","GLTDVD91L28I872M"],
		["Residenza","Rende (CS)"]
	]
}
