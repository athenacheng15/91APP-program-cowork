import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import BoldText from "./BoldText";
import EachListItem from "./EachListItem";

function SuccessInfo() {
	const[stored,setStored]=useState<any>();
	//改進：any
	const[eachItems,setEachItems]=useState<any>();
	const[personalInfo,setPersonalInfo]=useState<any>();


	useEffect(()=>{
		//改進：Web Cryptography API
		const stored=localStorage.getItem("storedRegInfo");	
		setStored(JSON.parse(stored as string));
	},[]);

	useEffect(()=>{
		//取得localStorage裡的個人及訂購資訊，以避免在reload之後資訊會不見
		if(stored!==undefined){
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
			setEachItems(eachItems);
			setPersonalInfo(personalInfo);
		}
	},[stored]);

	useEffect(()=>console.log(eachItems,"eachitem"),[eachItems]);

	const { regInfo } = useContext(UserContext);
	

	

	if(eachItems===undefined || personalInfo===undefined){
		return<></>;
	}

	return ( <section className="bg-[#f0f0f0] h-[max-content] w-[100%] flex flex-col items-center">
		<div className="w-[91%] flex flex-col">
			<div className="mt-[21px] mb-[9px]">
				<BoldText content="登記資訊如下：" />
			</div>
			<div className="w-[100%] bg-[#D8D8D8] h-[1px] mb-[15px]"></div>
			<EachListItem info={eachItems}/>
			<div className="mt-[34px]"></div>
			<EachListItem info={personalInfo}/>
		</div>
	</section> );
}
// 改進：手機post了之後會更改database，不能再用同一隻手機申請

export default SuccessInfo;