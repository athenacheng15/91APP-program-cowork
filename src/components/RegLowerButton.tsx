import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utili/useContext";
import {isChinese} from "../utili/isChinese";

type RegLowerProps={
	buttonText:string;
	navLink:string
}


function RegLowerButton({buttonText,navLink}:RegLowerProps) {
	const navigate = useNavigate();
	const { regInfo, setRegInfo } = useContext(UserContext);
	const[validateCount,setValidateCount]=useState<number>(0);

	
	useEffect(()=>{
		//點擊選擇商品時會增加validateCount從而啟動這個useEffect
		//使用useEffect而不是function的原因是setState是非同步行為，需要在state改變之後再運行一次
		//需要重複的code的原因是每一個選項都需要獨特的判定，之後可以想想如何改善
		//而且會有按了選擇商品之後一直呼叫的問題
		if(validateCount>0 && validateCount%2===0){
			let nameValidation=false;
			let phoneValidation=false;
			//name
			if(isChinese(regInfo.name) && regInfo.name.length<8 && regInfo.name.length!==0 && regInfo.name!=="WRONG"){
				nameValidation=true;	
			}else{
				regInfo.name!=="WRONG" && setRegInfo({...regInfo,name:"WRONG"});
			}
			//phone
			if(regInfo.phone.match(/^[0-9]+$/)!==null && regInfo.phone!=="WRONG" && regInfo.phone.length===10){
				phoneValidation=true;
			}else{
				regInfo.phone!=="WRONG" && setRegInfo({...regInfo,phone:"WRONG"});
			}
		}},[validateCount,regInfo]);

	if(buttonText.length===0){
		return<></>;
	}

	return ( 
		<section 
			onClick={()=>{
				if(buttonText!=="選擇商品"){
					navigate(navLink);
					window.scroll({top: 0, left: 0, behavior: "smooth" }); 
				}else{
					setValidateCount(validateCount+2);
				}
			}}
			className="cursor-pointer bg-white h-[68px] flex w-[100%] items-center justify-center">
			<div className="w-[91%] bg-[#ff5455] h-[40px] rounded-md flex items-center justify-center">
				<span className="text-white text-[15px]">{buttonText}</span>
			</div>
		</section> );
}

export default RegLowerButton;