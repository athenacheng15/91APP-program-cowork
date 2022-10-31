export function isChinese(value:string){
	const re=/[^\u4e00-\u9fa5]/;
	if(re.test(value)) return false;
	return true;
}
