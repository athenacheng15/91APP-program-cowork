import BlankDiv from "../../../components/BlankDiv";
import PopUp from "../../../components/PopUp";
import RegRule from "../../../components/RegRule";
import SuccessHeader from "./SuccessHeader";
import SuccessInfo from "./SuccessInfo";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../utili/useContext";


export default function SuccessWrapper() {
	const navigate = useNavigate();
	const { showReg,setShowReg } = useContext(UserContext);



	function navToHome(){
		navigate("/register");
		setShowReg(false);
		window.scroll({top: 0, left: 0, behavior: "smooth" }); 
	}

	useEffect(()=>console.log(showReg,"in wrapper"),[showReg]);

	return (
		// <section className="w-[100%] flex flex-col h-[max-content] md:bg-[#eeeeee]">
		<section className="h-[max-content] bg-[#fafafa] flex flex-col md:items-center md:min-h-[979px]">	
			<SuccessHeader />
			<SuccessInfo />
			<div className="md:mt-[40px] flex justify-center">
				<RegRule />
			</div>
			
			<BlankDiv />
			<div className={`${showReg ? "fixed" : "hidden"} left-[30%]`}>
				<PopUp title="已加入會員" content="點擊回到主頁" buttonText="回到主頁" buttonFunction={navToHome}/></div>
		</section>
	);
}
