import BoldText from "./BoldText";

type EachListItemProps={info:{
    left: string;
	style:string;
    right?: string;
}[]}

function EachListItem({info}:EachListItemProps) {
	return ( 
		<>
			{info.map((item:any)=>
				(

					<section key={item.id} className="w-[100%] flex justify-between mb-[10px]">
						{item.style==="bold" && item.right!==undefined  &&(
							<>
								<BoldText content={item.left} />
								<BoldText content={item.right} />
							</>
						)}
						
						{item.style==="bold" && item.right===undefined && (
							<>
								<BoldText content={item.left} />
							</>
						)}
						{item.style==="normal" && (
							<>
								<div className="ml-[9px] text-[14px] text-[#333333]">{item.left}</div>
								<div className={"text-[#333333] ml-[9px] text-[14px] font-[500]"}>{item.right}</div> 
							</>
						)}
						{item.style==="red" && (
							<>
								<div className="ml-[9px] text-[14px] text-[#333333]">{item.left}</div>
								<div className={"text-[#ff4949] ml-[9px] text-[14px] font-[500]"}>{item.right}</div> 
							</>
						)}
						{/* {item.left}
						{item.right} */}

					</section>
				))}
	
		</>
		
	);
}

export default EachListItem;