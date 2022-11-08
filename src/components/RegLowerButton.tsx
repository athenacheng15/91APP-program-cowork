import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utili/useContext";
import {isChinese} from "../utili/isChinese";
import PopUp from "./PopUp";

type RegLowerProps={
	buttonText:string;
	navLink:string
}


function RegLowerButton({buttonText,navLink}:RegLowerProps) {
	const navigate = useNavigate();
	const { regInfo, setRegInfo,proPostInfo, setProPostInfo } = useContext(UserContext);
	const[validateCount,setValidateCount]=useState<number>(0);
	const[showPopUp,setShowPopUp]=useState<boolean>(false);
	const[showReg,setShowReg]=useState<boolean>(false);

	useEffect(()=>{
		if(proPostInfo.checked===null){
			setProPostInfo({...proPostInfo,checked:false});
			setRegInfo(proPostInfo);
		}
		else if (buttonText==="選擇商品"){
			setRegInfo(proPostInfo);
		}
	},[validateCount]);



	
	useEffect(()=>{
		//點擊選擇商品時會增加validateCount從而啟動這個useEffect
		//使用useEffect而不是function的原因是setState是非同步行為，需要在state改變之後再運行一次
		//需要重複的code的原因是每一個選項都需要獨特的判定，之後可以想想如何改善
		//而且會有按了選擇商品之後一直呼叫的問題
		if(validateCount>0 && validateCount%2===0){
			if(buttonText==="選擇商品"){
				let nameValidation=false;
				let phoneValidation=false;
				let emailValidation=false;
				let checkBoxValidation=false;
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

				//email
				const re = /\S+@\S+\.\S+/;
				if(re.test(regInfo.email) || regInfo.email.length!==0){
					emailValidation=true;
				}else{
					regInfo.email!=="WRONG" && setRegInfo({...regInfo,email:"WRONG"});
				}

				//checkbox
				if(regInfo.checked){
					checkBoxValidation=true;
				}

				//all validation pass, start navigate
				if(nameValidation && phoneValidation && emailValidation && checkBoxValidation){
					navigate(navLink);
					window.scroll({top: 0, left: 0, behavior: "smooth" }); 
				}
			}
			
		}},[regInfo]);

	function postChecker(){
		//檢查是否所有項目已經填寫再送出		
		if(regInfo.type.length===0 || regInfo.color.length===0|| regInfo.size.length===0){
			setShowPopUp(true);
		}else{
			localStorage.setItem("storedRegInfo", JSON.stringify(regInfo));
			navigator();
		}
	}
	function popUpSetter(){
		setShowPopUp(false);
	}

	function navigator(){
		navigate(navLink);
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}

	function regMember(){
		setShowReg(true);
	}

	function navToHome(){
		navigate("/register");
		setShowReg(false);
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}
		

	if(buttonText.length===0){
		return<></>;
	}

	return ( 
		<>
			<div className={`${showPopUp ? "fixed" : "hidden"} left-[30%]`}>
				<PopUp title="請選擇商品選項" content="送出資料錯誤，未選擇商品款式規格" buttonText="確認" buttonFunction={popUpSetter}/></div>
			<div className={`${showReg ? "fixed" : "hidden"} left-[30%]`}>
				<PopUp title="已加入會員" content="點擊回到主頁" buttonText="回到主頁" buttonFunction={navToHome}/></div>
			<section 
				onClick={()=>{
					if(buttonText!=="選擇商品" && buttonText!=="送出" && buttonText!=="加入會員"){
						// navigate(navLink);
						// window.scroll({top: 0, left: 0, behavior: "smooth" }); 
						navigator();
					}else{
						setValidateCount(validateCount+2);
						buttonText==="送出"&&postChecker();
						buttonText==="加入會員"&&regMember();
					}
				}}
				className="fixed bottom-0 mt-auto bg-white h-[max-content] flex w-[100%] items-center justify-center flex-col">
				<div className="w-[100%] h-[1px] bg-[#e9e9e9]"></div>

				{buttonText==="送出"&& regInfo.size.length!==0&&(
					<div className="flex items-center justify-between mt-[5px] w-[91%]">
						<span className="text-[#FF5353] text-[14px]">一經送出商品選項，不得修改</span>
						<span className="text-[#FF5353] text-[14px]">NT${regInfo.price}</span>
					</div>
				)}
				{buttonText==="加入會員"&&(
					<div className="flex items-center justify-center mt-[6px] w-[91%] md:mt-[10px]">
						<span className="text-[#FF5353] text-[14px] md:text-[16px]">立刻加入會員，開賣通知不漏接！</span>
					</div>
				)}
				<div className={`${regInfo.price===undefined&& "mt-[15px]"} mt-[15px] cursor-pointer mb-[10px] w-[91%] bg-[#ff5455] h-[40px] rounded-md flex items-center justify-center`}>
					<span className="text-white text-[15px]">{buttonText}</span>
				</div>
			</section> 
		</>);
	// 改進：sticky bottom
}

export default RegLowerButton;