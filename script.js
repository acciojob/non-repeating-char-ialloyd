//your JS code here. If required.

let map=new Map();

let str=prompt("Enter a string")

function result(str){

	for(let i=0; i<str.length; i++){

		if(map.has(str.charAt(i))){

			map.set(str.charAt(i), map.get(str.charAt(i))+1)
		}
		else{

			map.set(str.charAt(i), 1);
		}
	}

	let res="";
	map.forEach((value,key)=>{

		if(value==1){

			res=key;
			break;
		}
	})

	return res;
	
}

alert(result(str))
