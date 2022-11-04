function check(k,array,cmd){
	let newCMD=cmd;
	if(array.length>k){
		for(let x=0 ; x<array.length-1 ; x++){
			newCMD+1;
		}
	}else{
		return newCMD;
	}
	return newCMD;
}
//最後會return什麼？

const cwd=[4,19,6,-2,4];
check(3,cwd,4);