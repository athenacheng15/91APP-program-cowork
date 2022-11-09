import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
import Selector from "./Selector";
import TitlePrice from "./TitlePrice";
import {registerData,priceChart} from "../../../data/registerData";
import defaultPhoto from"../../../img/register/iPhone-images/pro-iphone-13-sky.png";
import PopUp from "../../../components/PopUp";
import BlankDiv from "../../../components/BlankDiv";
import {
	ChevronRightIcon,
	ChevronLeftIcon
} from "@primer/octicons-react";

export default function Selection() {
	const navigate = useNavigate();
	const { regInfo,setRegInfo,xOffSet,setXOffSet,showPopUp,setShowPopUp,showReg,setShowReg } = useContext(UserContext);
	const[image,setImage]=useState<string>(defaultPhoto);	
	const[navBack,setNavBack]=useState<boolean>(false);
	const [title,setTitle]=useState<string>("Apple iPhone 13");
	const [price,setPrice]=useState<string>("");
	const [size,setSize]=useState<string>("");
	const[carouselLength,setCarouselLength]=useState<number>();
	const[lengthNow,setLengthNow]=useState<number>(5);
	const[stored,setStored]=useState<any>();
	const[refreshCount,setRefreshCount]=useState<number>(0);

	useEffect(()=>{
		const stored=localStorage.getItem("storedRegInfo");	
		setStored(JSON.parse(stored as string));
	},[]);

	useEffect(()=>{
		//取得Selection page輪播圖中的照片長度
		//取得的意義是不想將停止translateX的數值寫死，希望在未來如新增照片也能動態操縱輪播圖停止的條件
		if(registerData!==undefined){
			const filtered=registerData.filter((item)=>item.type==="iPhone 13" || item.type==="iPhone 13 Pro");
			const filteredIMG=filtered.map((item)=>item.imgUrl);
			setCarouselLength(filteredIMG.length);
		}
	},[]);

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
		regInfo.type.length!==0 && setTitle(`Apple ${regInfo.type}`);
	},[regInfo]);

	useEffect(()=>{
		//如果未填寫基本資料即以輸入url進入本頁，顯示彈窗並引導回上一頁
		//分享Selection網頁給其他人時，如果localStorage沒有資料，也會導回上一頁
		console.log(regInfo.name.length,"regInfo");
		console.log(stored,"stored");

		if(stored===undefined || stored===null){
			setRefreshCount(refreshCount+1);
			// refreshCount<=2 ? setNavBack(true) :setNavBack(false);
			setNavBack(true);
			return;
		}

		if((regInfo.name.length===0 || regInfo.phone.length===0 || regInfo.email.length===0)&&
		((stored.name.length===0 || stored.phone.length===0 || stored.email.length===0))
		){
			setNavBack(true);
			console.log(true);
			
		}else{
			setNavBack(false);
		}
	},[regInfo,stored]);


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

	function forwardHandler(){
		if(lengthNow!==carouselLength){
			setXOffSet(xOffSet-89);
			setLengthNow(lengthNow+1);
		}else{	
			return;
		}
	}

	function backwardHandler(){
		if(lengthNow===5){
			return;
		}else{
			setXOffSet(xOffSet+89);
			setLengthNow(lengthNow-1);
		}
	}

	function popUpSetter(){
		setShowPopUp(false);
	}





	return (
		<section className="h-[max-content] bg-[#fafafa] flex flex-col md:items-center md:min-h-[979px]">
			<div className="hidden md:block my-[43px] text-[64px] font-[500]">選擇商品</div>
			<div className="relative flex w-[100%] flex-col bg-white md:w-[75%] md:max-w-[1080px] md:flex-row">
				<Gallery image={image}/>
				<div 
					onClick={()=>backwardHandler()}
					className={`${lengthNow===5? "hidden" :"xl:block"} absolute bottom-[15%] left-[40px] hidden`}>
					<ChevronLeftIcon size={24} fill="#8e8e8e" className="mr-[20px] self-center cursor-pointer" />
				</div>
				<div 
					onClick={()=>forwardHandler()}
					className={`${lengthNow===carouselLength? "hidden":"xl:block"} absolute bottom-[15%] left-[507px] hidden`}>
					<ChevronRightIcon size={24} fill="#8e8e8e" className="mr-[20px] self-center cursor-pointer" />
				</div>
				<div className="flex flex-col max-w-[100%] md:max-w-[376px] ml-0 md:ml-[89px]">
					<TitlePrice title={title} price={price} />
					<Selector />
				</div>
			</div>
			<div className="block md:hidden">
				<BlankDiv />
			</div>
			{navBack&&(
				<>
					<PopUp title="個人資料有誤" content="個人資料尚未登記，請回上一頁填寫" buttonText="回上一頁" buttonFunction={navigateBack}/>
				</>
			)}
			<div className={`${showPopUp ? "fixed" : "hidden"} left-[30%]`}>
				<PopUp title="請選擇商品選項" content="送出資料錯誤，未選擇商品款式規格" buttonText="確認" buttonFunction={popUpSetter}/>
			</div>
			{/* <div className={`${showReg ? "fixed" : "hidden"} left-[30%]`}>
				<PopUp title="已加入會員" content="點擊回到主頁" buttonText="回到主頁" buttonFunction={navToHome}/></div> */}

		</section>


	);
}
