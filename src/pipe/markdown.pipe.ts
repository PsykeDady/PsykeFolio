import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"markdown"})
export class MarkdownPipe implements PipeTransform{
	transform(value: string, ...args: any[]) : string {
		let tmp1:string=""
		let tmp2:string=""
		let typematch:"link"|undefined=undefined;
		let builded:string=""
		for (let c of value ){
			if(! typematch) switch(c){
				case '[' : typematch="link"; break;
				default : builded+=c;
			}
			else {
				if(typematch=="link"){
					/*
					 * tmp1=name of link
					 * tmp2=incremental value/url of link
					 */
					switch(c){
						case ']': tmp1=tmp2; tmp2=""; break;
						case '(': break; 
						case ')': builded+=`<a href="${tmp2}">${tmp1}</a>`; tmp1=""; tmp2=""; typematch=undefined; break;
						default: tmp2+=c;
					}
				}
			}
		}
		
		return builded;
	}
}