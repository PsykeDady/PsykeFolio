import { Component, Input, OnInit } from "@angular/core";
import { PersonalData } from "src/model/personal-data.model";

@Component({
	selector:"cvstatic-header-mobile",
	templateUrl:"./cvstatic-header-mobile.component.html",
	styleUrls:["../cvstatic-header.component.css","./cvstatic-header-mobile.component.css"]
}) export class CVStaticHeaderMobile implements OnInit {
	@Input("personal_data")
	personal_data_i:PersonalData[]= []

	@Input()
	updated:string="";

	personal_data:PersonalData[]= []
	



	constructor(){}

	public ngOnInit(): void {
		if(this.personal_data_i && this.personal_data_i.length>1){
			this.personal_data=this.personal_data_i.filter(v=>v.personal.key!="")
		}
	}
}
