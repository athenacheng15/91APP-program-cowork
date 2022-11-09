import SelectionCarousel from "./SelectionCarousell";
import {registerData} from "../../../data/registerData";
import { useEffect, useState } from "react";


type GalleryProps={
    image:string;
}

function Gallery({image}:GalleryProps) {
	const[carouselImg,setCarouselImg]=useState<string[] | undefined>();
	const[catalog,setCatalog]=useState<boolean>(false);

	useEffect(()=>{
		if(registerData!==undefined){
			const filtered=registerData.filter((item)=>item.type==="iPhone 13" || item.type==="iPhone 13 Pro");
			const filteredIMG=filtered.map((item)=>item.imgUrl);
			setCarouselImg(filteredIMG);
		}
	},[]);

	useEffect(()=>{
		if (image==="/static/media/iPhone13Catalog.d0fc53cee302ad11db09.png" || image ==="/static/media/iPhone13ProCatalog.69de892200276bacd586.png"){
			setCatalog(true);
		}else{
			setCatalog(false);
		}
	},[image]);
	
	return ( <section className="w-[100%] h-[375px] bg-[#f9f9f9] flex flex-col items-center justify-center md:h-[max-content] md:bg-white md:mt-[72px] md:max-w-[415px] md:overflow-hidden relative md:ml-[81px] min-w-[0] xl:min-w-[426px]">
		<div className={`${catalog ? "bg-white" : "bg-[#f0f0f0]"} w-[426px] h-[426px] flex items-center justify-center`}>
			<img src={image} alt="" className={`${catalog ? "w-[298px]" : "w-[295px]"} ${catalog ? "h-[345px]" : "h-[349px]"} ${catalog ? "md:w-[333px]" : "w-[295px]"} ${catalog ? "h-[426px]" : "h-[349px]"}`}></img>
		</div>
		<SelectionCarousel image={carouselImg}/>
	</section> );
}

export default Gallery;