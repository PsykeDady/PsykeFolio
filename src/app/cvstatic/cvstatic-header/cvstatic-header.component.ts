import { Component, OnInit } from "@angular/core";
import { PersonalData } from "src/model/personal-data.model";
import { PersonalDataService } from "src/services/personal-data.service";

@Component({
	selector:"cvstatic-header",
	templateUrl:"./cvstatic-header.component.html",
	styleUrls:["./cvstatic-header.component.css"]
}) export class CVStaticHeader implements OnInit {
	updated:string="29/03/2023"
	name:string="";
	description:string="";
	personal_data:PersonalData[]=[]; 

	constructor(private personalDataService:PersonalDataService){}

	public ngOnInit(): void {
		if(this.personalDataService.personal_data && this.personalDataService.personal_data.length>1){
			for(let i of this.personalDataService.personal_data){
				if(i.personal.key==="name"){
					this.name=i.personal.value
				} else if (i.personal.key==="description"){
					this.description=i.personal.value
				} else {
					this.personal_data.push(i);
				}
			}
		}
	}
}