import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import Selector from "./Selector";
import TitlePrice from "./TitlePrice";
import {registerData,priceChart} from "../../../data/registerData";
import defaultPhoto from"../../../img/register/iPhone-images/pro-iphone-13-sky.png";
import PopUp from "../../../components/PopUp";
import BlankDiv from "./BlankDiv";

export default function Selection() {
	const navigate = useNavigate();
	const { regInfo,setRegInfo } = useContext(UserContext);
	const[image,setImage]=useState<string>(defaultPhoto);	
	const[navBack,setNavBack]=useState<boolean>(false);
	const [title,setTitle]=useState<string>("Apple iPhone 13");
	const [price,setPrice]=useState<string>("");
	const [size,setSize]=useState<string>("");



	useEffect(()=>{
		//處理Gallery顯示的照片
		console.log(regInfo);
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
		regInfo.type.length!==0 && setTitle(`Apple ${regInfo.type}`);
	},[regInfo]);

	useEffect(()=>{
		//如果未填寫基本資料即以輸入url進入本頁，顯示彈窗並引導回上一頁
		if(regInfo.name.length===0 || regInfo.phone.length===0 || regInfo.email.length===0){
			setNavBack(true);
		}
	},[]);

	function priceProcessor(){
		const localPrice=priceChart.filter((item:any)=>item.type===regInfo.type && item.size === regInfo.size)[0].price;
		setPrice(localPrice);
		setRegInfo({...regInfo,price:localPrice});
		setSize(regInfo.size);
	}


	useEffect(()=>{
		//處理價錢

		if(regInfo.color.length!==0 && regInfo.size.length!==0 && price===""){
			priceProcessor();
		}

		if(regInfo.size.length!==0 && regInfo.size!==size){
			priceProcessor();
		}

		if(regInfo.color.length===0 && regInfo.size.length===0){
			setPrice("");
		}

	},[regInfo]);



	function navigateBack(){
		navigate("/register/reg");
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}

	// function doNothing(){
	// 	return;
	// }

	return (
		<section className="h-[max-content] bg-[#fafafa] flex flex-col">
			<Gallery image={image}/>
			<TitlePrice title={title} price={price} />
			<Selector />
			<BlankDiv />
			{navBack&&(<PopUp title="個人資料有誤" content="個人資料尚未登記，請回上一頁填寫" buttonText="回上一頁" buttonFunction={navigateBack}/>)}
			{/* 改進：之後記得將註解去除 */}
			{/* {regInfo.type===undefined || regInfo.color===undefined|| regInfo.size===undefined && (<PopUp title="請選擇商品選項" content="送出資料錯誤，未選擇商品款式規格" buttonText="確認" buttonFunction={doNothing}/>)} ) */}
		</section>


	);
}
