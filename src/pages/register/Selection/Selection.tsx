import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import Gallery from "./Gallery";
import Selector from "./Selector";
import TitlePrice from "./TitlePrice";
import {registerData} from "../../../data/registerData";
import defaultPhoto from"../../../img/register/iPhone-images/iphone-13-pro-max-blue-select.png";

export default function Selection() {

	const { regInfo, setRegInfo } = useContext(UserContext);
	const[image,setImage]=useState<string>(defaultPhoto);
	const[price,setPrice]=useState<string>("");
	useEffect(()=>{
		//處理Gallery顯示的照片
		if(regInfo.type==="iPhone 13"){
			if(regInfo.size.length===0 && regInfo.color.length===0){
				setImage(registerData.filter((item)=>(item.name==="iPhone 13 catalog"))[0].imgUrl);
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
