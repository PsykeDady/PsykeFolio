import {  Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name:"level"
})
export class LevelPipe implements PipeTransform {
	
	transform(value: any, ...args: any[]) {
		switch (value) {
			case 0:
				return "Infomative";
			case 25:
				return "Basse";
			case 50:
				return "Discrete";
			case 75:
				return "Buone"
			default:
				return "Ottime"
		}
	} 

}