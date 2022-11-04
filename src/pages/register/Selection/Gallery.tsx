import SelectionCarousel from "./SelectionCarousell";
import {registerData} from "../../../data/registerData";
import { useEffect, useState } from "react";


type GalleryProps={
    image:string;
}

function Gallery({image}:GalleryProps) {
	const[carouselImg,setCarouselImg]=useState<string[] | undefined>();
	useEffect(()=>{
		if(registerData!==undefined){
			const filtered=registerData.filter((item)=>item.type==="iPhone 13" || item.type==="iPhone 13 Pro");
			const filteredIMG=filtered.map((item)=>item.imgUrl);
			console.log(filteredIMG);
			setCarouselImg(filteredIMG);
		}
	},[]);
	
	return ( <section className="w-[100%] h-[375px] bg-[#f9f9f9] flex flex-col items-center justify-center md:h-[max-content] md:bg-white md:mt-[72px] md:max-w-[415px] md:overflow-hidden relative md:ml-[81px]">
		<div className="w-[426px] h-[426px] bg-[#f0f0f0] flex items-center justify-center">
			<img src={image} alt="" className="w-[295px] h-[349px]"></img>
		</div>
		<SelectionCarousel image={carouselImg}/>
	</section> );
}

export default Gallery;