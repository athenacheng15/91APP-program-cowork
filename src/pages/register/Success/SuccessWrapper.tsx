import BlankDiv from "../../../components/BlankDiv";
import PopUp from "../../../components/PopUp";
import RegRule from "../../../components/RegRule";
import SuccessHeader from "./SuccessHeader";
import SuccessInfo from "./SuccessInfo";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";


export default function SuccessWrapper() {
	const navigate = useNavigate();
	const { showReg,setShowReg } = useContext(UserContext);
	const[navBack,setNavBack]=useState<boolean>(false);

	function navigateBack(){
		navigate("/register/form");
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}

	function navToHome(){
		navigate("/register");
		setShowReg(false);
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}



	return (
		// <section className="w-[100%] flex flex-col h-[max-content] md:bg-[#eeeeee]">
		<>
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
					<PopUp title="已加入會員" content="點擊回到主頁" buttonText="回到主頁" buttonFunction={navToHome}/></div>
			</section>
		</>

	);
}
