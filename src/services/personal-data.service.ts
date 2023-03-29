import { PersonalData } from "src/model/personal-data.model";

export class PersonalDataService {
	
	private _personal_data:PersonalData[]=[
		new PersonalData({key:"name",value:"Davide Galati"}),
		new PersonalData({key:"description",value:"I'm FullStack Developer"}),
		new PersonalData({key:"Data di Nascita",value:"28/07/1991"}),
		new PersonalData({key:"Luogo di Nascita",value:"Provincia di Catanzaro"}),
		new PersonalData({key:"Residenza",value:"Rende (CS)"})
	]

	constructor() {}

	public set personal_data(personal_data: PersonalData[]){
		this._personal_data=personal_data.map(v=>PersonalData.buildFromPersonalData(v));
	}
	
	public get personal_data(){
		return this._personal_data.map(v=>PersonalData.buildFromPersonalData(v));
	}

	public addPersonalData(personalData:PersonalData){
		this._personal_data.push(personalData);
	}

	public addPersonal(key:string, value:string){
		this.addPersonalData(new PersonalData({key,value}))
	}

	public removePersonal(key:string){
		this._personal_data.filter(v=>v.personal.key!=key);
	}
}