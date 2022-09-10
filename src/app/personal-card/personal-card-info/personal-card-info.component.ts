import { Component,Input } from "@angular/core";
import { PersonalData } from "src/model/personal-data.model";

@Component({
	selector:"personal-card-info",
	templateUrl:"./personal-card-info.component.html",
	styleUrls:['./personal-card-info.component.css']
}) export class PersonalCardInfo {
	@Input()
	personalData: PersonalData[]=[]

	PersonalData: typeof PersonalData = PersonalData ;
}