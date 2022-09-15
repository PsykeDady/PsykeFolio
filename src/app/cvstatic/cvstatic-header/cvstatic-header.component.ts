import { Component } from "@angular/core";
import { PersonalDataService } from "src/services/personal-data.service";

@Component({
	selector:"cvstatic-header",
	templateUrl:"./cvstatic-header.component.html",
	styleUrls:["./cvstatic-header.component.css"]
}) export class CVStaticHeader {
	updated:string="15/09/2022"
	constructor(public personalDataService:PersonalDataService){}
}