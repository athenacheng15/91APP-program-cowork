import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import {registerData,RegisterDataProps} from "../../../data/registerData";
//改進：搞清楚item的type
type EachSelectorProps={ info: { name: string; color?:string }[];
localType:string; }

function EachSelector({info,localType}:EachSelectorProps) {
	const [clickName,setClickName]=useState<string>("");
	const { regInfo, setRegInfo } = useContext(UserContext);
	const iPhoneColor=registerData.filter((item:any)=>(item.type===regInfo.type));

	useEffect(()=>{
		//處理選擇不同iPhone時 color，size與price的UI
		regInfo.color.length===0 && info[0].color!==undefined && setClickName("");
		regInfo.size.length===0 && info[0].name.includes("GB") && setClickName("");
	}

	,[regInfo]);


	return (
		<>
			{info.map((item: {name: string; color?:string})=>(
				<div 
					onClick={()=>{
						setClickName(item.name);
						setRegInfo({...regInfo,[localType]:item.name});
						if(regInfo.type.length!==0 && localType==="type"){
							setRegInfo({...regInfo,type:item.name, color:"", size:""});
						}
					}}	
					key={item.name} className={`${clickName===item.name ? "bg-[#fe494e]":(localType!=="color" || regInfo.type.length===0 || (iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name)) ? "bg-white" : "bg-[#f3f3f3]")} ${localType!=="color" || (iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name))? "cursor-pointer" : "cursor-default"} ${localType==="type" || ((localType==="size" && regInfo.type.length!==0 && regInfo.color.length!==0)||(iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name)))? "pointer-events-auto" : "pointer-events-none"} ${(regInfo.type==="iPhone 13"||regInfo.type==="iPhone 13 mini"|| regInfo.type.length===0) && item.name==="1TB" ? "hidden" : "flex"} mr-[10px] mt-[10px] p-[10px] w-[max-content] h-[29px] border-solid border-[1px] border-[#d4d9dd] rounded-md flex items-center justify-center`}>
					<span className={`${clickName===item.name ? "text-white" : (localType!=="color" || (regInfo.type.length===0 || iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name))? "text-black": "text-[#8e8e8e]")} text-[13px]`}>{item.name}</span>
					{item.color&&(
						<span 
							style={{background:item.color}}
							className={"ml-[5px] rounded-full w-[12px] h-[12px]"}></span>
					)}
				</div> 
			))}
		</>
	);
}

export default EachSelector;