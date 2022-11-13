import BlankDiv from "../../../components/BlankDiv";
import PopUp from "../../../components/PopUp";
import RegRule from "../../../components/RegRule";
import SuccessHeader from "./SuccessHeader";
import SuccessInfo from "./SuccessInfo";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import { Helmet } from "react-helmet";
import {simplised} from "../../../utili/chineseChanger";


export default function SuccessWrapper() {
	const navigate = useNavigate();
	const { showReg,setShowReg,simplified } = useContext(UserContext);
	const[navBack,setNavBack]=useState<boolean>(false);

	function navigateBack(){
		navigate("/register/form");
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}

	function navToHome(){
		navigate("/register");
		setShowReg(false);
		localStorage.removeItem("storedRegInfo");
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}



	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{simplified?simplised("iPhone搶購・成功登記"):"iPhone搶購・成功登記"}</title>
				<link rel="canonical" href="/App" />
			</Helmet>
			{navBack&&(
				<>
					<PopUp title="個人資料有誤" content="個人資料尚未登記，請回到登記頁填寫" buttonText="回登記頁" buttonFunction={navigateBack}/>
				</>
			)}			<section className="h-[max-content] bg-[#fafafa] flex flex-col md:items-center md:min-h-[979px]">	
				<SuccessHeader />
				<SuccessInfo 
					navBack={navBack}
					setNavBack={setNavBack}
				/>
				<div className="md:mt-[40px] flex justify-center">
					<RegRule />
				</div>
			
				<BlankDiv />
				<div className={`${showReg ? "fixed" : "hidden"} left-[30%]`}>
					<PopUp title={simplified?simplised("已加入會員"):"已加入會員"} content={simplified?simplised("點擊回到主頁"):"點擊回到主頁"} buttonText={simplified?simplised("回到主頁"):"回到主頁"} buttonFunction={navToHome}/></div>
			</section>
		</>

	);
}
