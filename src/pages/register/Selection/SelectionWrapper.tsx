import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import Gallery from "./Gallery";
import Selector from "./Selector";
import TitlePrice from "./TitlePrice";
import {registerData} from "../../../data/registerData";
import defaultPhoto from"../../../img/register/iPhone-images/pro-iphone-13-sky.png";
import PopUp from "../../../components/PopUp";

export default function Selection() {

	const { regInfo } = useContext(UserContext);
	const[image,setImage]=useState<string>(defaultPhoto);	
	const[navBack,setNavBack]=useState<boolean>(false);

	useEffect(()=>{
		//處理Gallery顯示的照片
		if(regInfo.type.length!==0){
			if(regInfo.color.length===0){
				setImage(registerData.filter((item)=>(item.name===regInfo.type))[0].imgUrl);
			}
			else{
				setImage(registerData.filter((item)=>(item.name===`${regInfo.type} ${regInfo.color}`))[0].imgUrl);
			}
		}
	},[regInfo]);

	useEffect(()=>{
		//如果未填寫基本資料即以url進入本頁，顯示彈窗並引導回上一頁
		if(regInfo.name.length===0 || regInfo.phone.length===0 || regInfo.email.length===0){
			console.log("wrong");
			setNavBack(true);
		}
	},[]);

	function test(){
		console.log("hi");
		
	}

	return (
		<section className="h-[max-content] bg-[#fafafa] flex flex-col">
			<Gallery image={image}/>
			<TitlePrice />
			<Selector />
			{navBack&&(<PopUp title="個人資料有誤" content="個人資料尚未登記，請回上一頁填寫" buttonText="回上一頁" />)}
		</section>


	);
}
