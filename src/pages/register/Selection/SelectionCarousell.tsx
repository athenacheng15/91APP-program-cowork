import { useContext, useState } from "react";
import { UserContext } from "../../../utili/useContext";

type SelectionCarouselProps={
    image:string[] | undefined;
}

function SelectionCarousel({image}:SelectionCarouselProps) {
	const { xOffSet,setXOffSet } = useContext(UserContext);
	const[initialState,setInitialState]=useState<boolean>(true);
	const[startIndex,setStartIndex]=useState<number>(1);
	const[endIndex,setEndIndex]=useState<number>(7);

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
				{/* <ChevronLeftIcon size={24} fill="#8e8e8e" className="mr-[20px] self-center cursor-pointer" /> */}
				{image.map((item)=>(
					<>
						<img key={item} src={item} alt="" className={"w-[83px] h-[83px] bg-[#f0f0f0] mr-[3px]"}></img>
						{/* {initialState&&index>0&&index<6&&(<img key={item} src={item} alt="" className="w-[83px] h-[83px]"></img>)} */}
						{/* {!initialState&&index>startIndex&&index<endIndex&&(<img key={item} src={item} alt="" className="w-[83px] h-[83px]"></img>)} */}
					</>
				))}
				<div onClick={()=>forwardHandler()}>
					{/* <ChevronRightIcon 
						size={24} fill="#8e8e8e" className="ml-[20px] self-center cursor-pointer" /> */}
				</div>
			</div> 
			

		</div>
	);
}

export default  SelectionCarousel;