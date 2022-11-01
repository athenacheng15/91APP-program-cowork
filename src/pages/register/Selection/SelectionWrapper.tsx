import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import Gallery from "./Gallery";
import Selector from "./Selector";
import TitlePrice from "./TitlePrice";
import {registerData} from "../../../data/registerData";
import defaultPhoto from"../../../img/register/iPhone-images/pro-iphone-13-sky.png";

export default function Selection() {

	const { regInfo, setRegInfo } = useContext(UserContext);
	const[image,setImage]=useState<string>(defaultPhoto);
	useEffect(()=>{
		//處理Gallery顯示的照片
		if(regInfo.type.length!==0){
			if(regInfo.size.length===0 && regInfo.color.length===0){
				setImage(registerData.filter((item)=>(item.name===regInfo.type))[0].imgUrl);
			}
			else{
				setImage(registerData.filter((item)=>(item.name===`${regInfo.type} ${regInfo.color}`))[0].imgUrl);
			}
		}
	},[regInfo]);

	return (
		<section className="h-[max-content] bg-[#fafafa] flex flex-col">
			<Gallery image={image}/>
			<TitlePrice />
			<Selector />
		</section>


	);
}
