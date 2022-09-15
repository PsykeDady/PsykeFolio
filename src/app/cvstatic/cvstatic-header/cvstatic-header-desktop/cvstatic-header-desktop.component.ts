import { Component, Input } from "@angular/core";
import { PersonalData } from "src/model/personal-data.model";

@Component({
	selector:"cvstatic-header-desktop",
	templateUrl:"./cvstatic-header-desktop.component.html",
	styleUrls:["../cvstatic-header.component.css","./cvstatic-header-desktop.component.css"]
}) export class CVStaticHeaderDesktop {
	@Input() 
	personal_data:PersonalData[]=[]; 
	@Input()
	updated:string="";

	public constructor(){
	}
}
