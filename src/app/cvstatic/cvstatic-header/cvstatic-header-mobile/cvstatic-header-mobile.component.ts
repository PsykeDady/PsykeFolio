import { Component, Input, OnInit } from "@angular/core";
import { PersonalData } from "src/model/personal-data.model";

@Component({
	selector:"cvstatic-header-mobile",
	templateUrl:"./cvstatic-header-mobile.component.html",
	styleUrls:["../cvstatic-header.component.css","./cvstatic-header-mobile.component.css"]
}) export class CVStaticHeaderMobile{
	
	@Input()
	updated:string="";

	@Input()
	name:string="";

	@Input()
	description:string="";
	
	@Input("personal_data")
	personal_data:PersonalData[]= []


	constructor(){}

	
}
