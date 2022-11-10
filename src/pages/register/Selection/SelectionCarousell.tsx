import { useContext, useState } from "react";
import { UserContext } from "../../../utili/useContext";

// type SelectionCarouselProps={
//     image:{
// 		imgUrl: string;
// 		name: string;
// 		color?: undefined;
// 		type?: undefined;
// 	} ;
// }

function SelectionCarousel({image}:any) {
	const { xOffSet,setXOffSet } = useContext(UserContext);
	const[initialState,setInitialState]=useState<boolean>(true);
	const[startIndex,setStartIndex]=useState<number>(1);
	const[endIndex,setEndIndex]=useState<number>(7);
	const { regInfo, setRegInfo } = useContext(UserContext);

	function forwardHandler(){
		if(initialState){
			setInitialState(false);
		}else{
			setStartIndex(startIndex+1);
			setEndIndex(endIndex+1);
		}
	}

	if(image===undefined){
		return<></>;
	}
	return ( 
		<div className="max-w-[380px]">
			<div 
				style={{
					transform: `translate3d(${xOffSet}px, 0, 0)`,
					transition: "transform 0.3s ease-in-out"
				}}
				className="hidden md:flex justify-center md:mb-[70px] mt-[12px] w-[779px]">

				{image.map((item:any)=>(
					<>
						<img 
							onClick={()=>setRegInfo({...regInfo,type:item.type,color:item.color})}
							key={item} src={item.imgUrl} alt="" className={"w-[83px] h-[83px] bg-[#f0f0f0] mr-[3px] cursor-pointer"}></img>
					
					</>
				))}
				<div onClick={()=>forwardHandler()}>
			
				</div>
			</div> 
			

		</div>
	);
}

export default  SelectionCarousel;