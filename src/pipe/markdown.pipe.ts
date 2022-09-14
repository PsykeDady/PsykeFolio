import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"markdown"})
export class MarkdownPipe implements PipeTransform{
	transform(value: string, ...args: any[]) : string {
		let tmp1:string=""
		let tmp2:string=""
		let typematch:"link"|"strong"|"italic"|undefined=undefined;
		let builded:string=""
		for (let c of value ){
			if(! typematch) switch(c){
				case '[' : typematch="link"; break;
				case '*' : typematch="italic"; break;
				default : builded+=c;
			}
			else {
				if(typematch=="italic"){
					/* 
					 * tmp1:check if first char or not
					 * tmp2:build italic text
					 */
					console.log("ciao "+c+" tmp1 "+tmp1)
					switch(c){
						case '*': 
							if(tmp1=="") {
								console.log("ciao if")
								typematch="strong"; 
							} else {
								builded+=`<em class='buildedemp'>${tmp2}</em>`
								typematch=undefined;
								tmp1="";
								tmp2="";
							}
						break;
						default:{ 
							tmp2+=c;
							tmp1="1";
						}
					}
				} else if(typematch=="strong"){
					/* 
					 * tmp1:check number of *
					 * tmp2:build strong text
					 */
					if(tmp1=="1"){
						switch(c){
							case '*': 
								builded+=`<strong class='buildedemp'>${tmp2}</strong>`
								typematch=undefined;
								tmp1="";
								tmp2="";
							break;
							default: 
								tmp2+='*'+c;
								tmp1="";
						}
					} else {
						switch(c){
							case '*': 
								tmp1+="1";
							break;
							default: tmp2+=c;
						}
					}
				} else if(typematch=="link"){
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