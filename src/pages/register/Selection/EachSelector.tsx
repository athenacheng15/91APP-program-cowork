import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import {registerData} from "../../../data/registerData";
//改進：搞清楚item的type
type EachSelectorProps={ info: { name: string; color?:string }[];
localType:string; }

function EachSelector({info,localType}:EachSelectorProps) {
	const [clickName,setClickName]=useState<string>("");
	const [noStock,setNoStock]=useState<any>();
	const { regInfo, setRegInfo } = useContext(UserContext);
	const iPhoneColor=registerData.filter((item:any)=>(item.type===regInfo.type));
	

	useEffect(()=>{
		if(regInfo.type.length!==0&&regInfo.color.length!==0){
			const stock=registerData.filter((item:any)=>(item.type===regInfo.type && item.color===regInfo.color))[0].stock;
			if(stock!==undefined){
				const asArray = Object.entries(stock);
				const withoutStock=asArray.filter((item:any,index:number)=>(item[1]===0)).map((item:any)=>(item[0]));
				setNoStock(withoutStock);
			}
		}
	},[regInfo]);




	useEffect(()=>{
		//處理選擇不同iPhone時 color，size與price的UI
		regInfo.color.length===0 && info[0].color!==undefined && setClickName("");
		regInfo.size.length===0 && info[0].name.includes("GB") && setClickName("");
	}

	,[regInfo]);

	useEffect(()=>{
		//處理選擇不同iPhone時 color，size與price的UI
		setClickName("");
	}
	,[regInfo]);


	if(info===undefined){
		return (<>
		Loading
		</>);
	}

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
						if(regInfo.color.length!==0 && localType==="color"){
							setRegInfo({...regInfo, color:item.name, size:""});
						}
					}}	
					key={item.name} className={`${clickName===item.name || regInfo[`${localType}`]===item.name ? "bg-[#fe494e]":(localType!=="color"&&localType!=="size" ||  (iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name)||((item.name.includes("GB")||item.name.includes("TB"))&&regInfo.type.length!==0&&regInfo.color.length!==0&&noStock!==undefined&&!noStock.some((e:any,index:number)=>e===item.name) )) ? "bg-white" : "bg-[#f3f3f3]")} ${localType!=="color" || (iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name))? "cursor-pointer" : "cursor-default"} ${localType==="type" || ((localType==="size" && regInfo.type.length!==0 && regInfo.color.length!==0&&noStock!==undefined&&!noStock.some((e:any,index:number)=>e===item.name))||(iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name)))? "pointer-events-auto" : "pointer-events-none"} ${(regInfo.type==="iPhone 13"||regInfo.type==="iPhone 13 mini"|| regInfo.type.length===0) && item.name==="1TB" ? "hidden" : "flex"} mr-[10px] mt-[10px] p-[10px] w-[max-content] h-[29px] border-solid border-[1px] border-[#d4d9dd] rounded-md flex items-center justify-center`}>
					<span className={`${clickName===item.name|| regInfo[`${localType}`]===item.name? "text-white" : (localType!=="color" || (regInfo.type.length===0 || iPhoneColor.length!==0 && iPhoneColor.some((e:any)=>e.color === item.name))? "text-black": "text-[#8e8e8e]")} text-[13px]`}>{item.name}</span>
					{item.color&&(
						<span 
							style={{background:item.color}}
							className={"ml-[5px] rounded-full w-[12px] h-[12px]"}></span>
					)}
					{/* <span className={`${item.name.includes("GB")&&regInfo.type.length!==0&&regInfo.color.length!==0&&noStock!==undefined&&noStock.some((e:any,index:number)=>e===item.name)}`}></span> */}
					{/* <span className={`${item.name.includes("GB")&&regInfo.type.length!==0&&regInfo.color.length!==0&&noStock!==undefined&&!noStock.some((e:any,index:number)=>e===item.name)? "bg-black":"bg-white"}`}>hello</span> */}
				</div> 
			))}
		</>
	);
}

export default EachSelector;