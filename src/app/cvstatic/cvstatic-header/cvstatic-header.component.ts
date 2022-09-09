import { Component } from "@angular/core";
import { PersonalDataService } from "src/services/personal-data.service";

@Component({
	selector:"cvstatic-header",
	templateUrl:"./cvstatic-header.component.html",
	styleUrls:["./cvstatic-header.component.css"]
}) export class CVStaticHeader {
	constructor(public personalDataService:PersonalDataService){}
}