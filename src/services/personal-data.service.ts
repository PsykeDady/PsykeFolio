import { PersonalData } from "src/model/personal-data.model";

export class PersonalDataService {
	
	private _personal_data:PersonalData[]=[
		new PersonalData({key:"",value:"Davide Galati"}),
		new PersonalData({key:"Data di Nascita",value:"28/07/1991"}),
		new PersonalData({key:"Luogo di Nascita",value:"Soverato (CZ)"}),
		new PersonalData({key:"CF",value:"GLTDVD91L28I872M"}),
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