import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import {registerData,RegisterDataProps} from "../../../data/registerData";
//改進：搞清楚item的type
type EachSelectorProps={ info: { name: string; color?:string }[];
localType:string; }

function EachSelector({info,localType}:EachSelectorProps) {
	const [clickName,setClickName]=useState<string>("");
	const { regInfo, setRegInfo } = useContext(UserContext);
	const iPhone13Color=registerData.filter((item:any)=>(item.type===regInfo.type));

	useEffect(()=>console.log(iPhone13Color),[iPhone13Color]);

	return (
		<>
			{info.map((item: {name: string; color?:string})=>{
				// console.log( regInfo.type.length!==0 && item.color!==undefined && localType==="color" && iPhone13Color.some((e:any)=>e.color === item.name));

				return(
					<div 
						onClick={()=>{
							setClickName(item.name);
							setRegInfo({...regInfo,[localType]:item.name});
						}}
						key={item.name} className={`${clickName===item.name ? "bg-[#fe494e]":"bg-white"} ${localType!=="color" || (iPhone13Color.length!==0 && iPhone13Color.some((e:any)=>e.color === item.name))? "cursor-pointer" : "cursor-default"} ${localType!=="color" || (iPhone13Color.length!==0 && iPhone13Color.some((e:any)=>e.color === item.name))? "pointer-events-auto" : "pointer-events-none"} ${localType!=="color" || (iPhone13Color.length!==0 && iPhone13Color.some((e:any)=>e.color === item.name))? "bg-white" : "bg-[#f3f3f3]"} mr-[10px] mt-[10px] p-[10px] w-[max-content] h-[29px] border-solid border-[1px] border-[#d4d9dd] rounded-md flex items-center justify-center`}>
						<span className={`${clickName===item.name ? "text-white" : (localType!=="color" || (iPhone13Color.length!==0 && iPhone13Color.some((e:any)=>e.color === item.name))? "text-black": "text-[#8e8e8e]")} text-[13px]`}>{item.name}</span>
						{item.color&&(
							<span 
								style={{background:item.color}}
								className={"ml-[5px] rounded-full w-[12px] h-[12px]"}></span>
						)}
					</div> 
				);
			})}
		</>
	);
}

export default EachSelector;