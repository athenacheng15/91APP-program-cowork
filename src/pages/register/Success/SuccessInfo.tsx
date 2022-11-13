import { useContext, useEffect, useState } from "react";
import PopUp from "../../../components/PopUp";
import { UserContext } from "../../../utili/useContext";
import { useNavigate } from "react-router-dom";
import BoldText from "./BoldText";
import EachListItem from "./EachListItem";
import {simplised} from "../../../utili/chineseChanger";


function SuccessInfo({navBack,setNavBack}:any) {
	const navigate = useNavigate();
	const[stored,setStored]=useState<any>();
	//改進：any
	const[eachItems,setEachItems]=useState<any>();
	const[personalInfo,setPersonalInfo]=useState<any>();
	const { simplified } = useContext(UserContext);



	useEffect(()=>{
		//改進：Web Cryptography API
		const stored=localStorage.getItem("storedRegInfo");	
		setStored(JSON.parse(stored as string));
	},[]);





	useEffect(()=>{
		if(stored===undefined){
			return;
		}
		if(stored===null){
			setNavBack(true);
			return;
		}

		


		if(stored!==undefined || stored!==null){
			const eachItems=[{id:0,left:"登記狀態",right:"驗證通過",style:"bold"},
				{id:1,left:"商品資訊",style:"bold"},
				{id:2,left:"商品",right:stored.type,style:"normal"},
				{id:3,left:"商品選項",right:`${stored.type}, ${stored.size}, ${stored.color}`,style:"normal"},
				{id:4,left:"商品數量",right:1,style:"normal"},
				{id:5,left:"單價",right:stored.price,style:"red"},
			];
			const personalInfo=[{id:0,left:"個人資訊",style:"bold"},
				{id:0,left:"姓名",right:stored.name,style:"normal"},
				{id:1,left:"手機號碼",right:stored.phone,style:"normal"},
				{id:1,left:"Email",right:stored.email,style:"normal"},
			];
			if(simplified){
				const simplifedEachItems=eachItems.map((item:any)=>({...item,left:simplised(item.left)}));
				const simplifedPersonalInfo=personalInfo.map((item:any)=>({...item,left:simplised(item.left)}));
				setEachItems(simplifedEachItems);
				setPersonalInfo(simplifedPersonalInfo);
			}else{
				setEachItems(eachItems);
				setPersonalInfo(personalInfo);
			}
		}
	},[stored]);


	
	function navigateBack(){
		navigate("/register/form");
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}
	

	if(eachItems===undefined || personalInfo===undefined){
		return<></>;
	}

	return ( 
		<>
			{navBack&&(
				<>
					<PopUp title="個人資料有誤" content="個人資料尚未登記，請回到登記頁填寫" buttonText="回登記頁" buttonFunction={navigateBack}/>
				</>
			)}
			<section className="bg-[#f0f0f0] h-[max-content] w-[100%] flex flex-col items-center">
				<div className="w-[91%] flex flex-col max-w-[850px]">
					<div className="mt-[21px] mb-[9px]">
						<BoldText content={simplified?simplised("登記資訊如下："):"登記資訊如下："} />
					</div>
					<div className="w-[100%] bg-[#D8D8D8] h-[1px] mb-[15px] md:mb-[30px]"></div>
					<EachListItem info={eachItems}/>
					<div className="mt-[34px]"></div>
					<EachListItem info={personalInfo}/>
				</div>
			</section> 
		</>);
}
// 改進：手機post了之後會更改database，不能再用同一隻手機申請

export default SuccessInfo;