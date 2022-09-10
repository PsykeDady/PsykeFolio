import { PersonalData } from "./personal-data.model";

export class Card {
	public constructor(
		public title:string,
		public personal_data:PersonalData[]
	){

	}
}
