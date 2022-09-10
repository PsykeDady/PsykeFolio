import { Personal } from "./personal.interface";

export class PersonalData {

	/* SPECIAL PERSONAL DATA TYPE */
	public static H_SEP:PersonalData=new PersonalData({key:"HSEP",value:"ORIZZONTAL SEPARATOR"})
	/*  */

	constructor(
		public personal : Personal
	) {

	}

	public static buildFromPersonalData(personal_data:PersonalData){
		return new PersonalData({key:personal_data.personal.key,value:personal_data.personal.value});
	}
}
