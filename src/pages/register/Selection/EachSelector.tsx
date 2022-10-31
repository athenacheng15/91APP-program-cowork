import { useContext, useState } from "react";
import { UserContext } from "../../../utili/useContext";

type EachSelectorProps={ info: { name: string; color?:string }[]; }

function EachSelector({info}:EachSelectorProps) {
	const [clickName,setClickName]=useState<string>("");
	const { regInfo, setRegInfo } = useContext(UserContext);

	return (
		<>
			{info.map((item: {name: string; color?:string})=>(
				<div 
					onClick={()=>{
						setClickName(item.name);
						setRegInfo({...regInfo,type:item.name}
							//這邊不用setProPostInfo，因為不需要驗證
						);
					}}
					key={item.name} className={`${clickName===item.name ? "bg-[#fe494e]":"bg-white"} mr-[10px] mt-[10px] p-[10px] w-[max-content] h-[29px] border-solid border-[1px] border-[#d4d9dd] rounded-md cursor-pointer flex items-center justify-center`}>
					<span className={`${clickName===item.name ? "text-white" : "text-black"} text-[13px]`}>{item.name}</span>
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