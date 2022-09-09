export class PersonalData {
	constructor(
		public personal : {key:string,value:string}
	) {

	}

	public static buildFromPersonalData(personal_data:PersonalData){
		return new PersonalData({key:personal_data.personal.key,value:personal_data.personal.value});
	}
}
