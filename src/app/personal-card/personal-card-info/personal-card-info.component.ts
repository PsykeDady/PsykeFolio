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

	percentinfo(value:string, revert?:true):number{
		let percent=25*parseInt(value);
		percent=revert?100-percent:percent
		return percent;
	} 

	generateLinear(value:string):{
					[klass: string]: any;
				} | null | undefined {
		let nvalue:number = this.percentinfo(value);
		console.log(nvalue);
		return nvalue==100? {'backgroundColor':'var(--secondary-dark-color)'} :
					nvalue==0? {'backgroundColor':'var(--secondary-light-color)'}:
					{'background':`linear-gradient(to right, var(--secondary-dark-color) ${nvalue}%, var(--secondary-light-color) ${100-nvalue}%)`};
	}
}