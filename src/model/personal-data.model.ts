import { Personal } from "./personal.interface";

export class PersonalData {

	/* SPECIAL PERSONAL DATA TYPE */
	public static H_SEP:PersonalData=new PersonalData({key:"HSEP",value:"ORIZZONTAL SEPARATOR", type:"sep"})
	public static PBREAK:PersonalData=new PersonalData({key:"PB",value:"PB", type:"PB"})
	public static EMPTY:PersonalData=new PersonalData({key:"",value:"",halfcolumn:true, type:"empty"})
	/*  */

	constructor(
		public personal : Personal
	) {

	}

	public static buildFromPersonalData(personal_data:PersonalData){
		return new PersonalData({key:personal_data.personal.key,value:personal_data.personal.value});
	}
}
