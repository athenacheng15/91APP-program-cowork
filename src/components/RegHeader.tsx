import logo from "../img/register/91Logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utili/useContext";

type RegHeaderProps={
	clicksOnSimplified:number;
	setClicksOnSimplified:React.Dispatch<React.SetStateAction<number>>;
}

function RegHeader({clicksOnSimplified,setClicksOnSimplified}:RegHeaderProps) {
	const navigate = useNavigate();
	const { simplified,setSimplified } = useContext(UserContext);

	return ( 
		<div className="h-[57px] bg-[#ff5455] flex items-center justify-between">
			<img 
				onClick={()=>{
					localStorage.removeItem("storedRegInfo");
					navigate("/");}}
				src={logo} alt="" className="w-[75px] h-[21px] ml-[20px] cursor-pointer md:w-[90px] md:h-[28px] md:ml-[15%]"></img>
			<button 
				onClick={()=>{
					setClicksOnSimplified(clicksOnSimplified+1);
					simplified ? setSimplified(false) : setSimplified(true);}}
				className="text-[14px] text-white cursor-pointer mr-[40px]">{simplified ? "繁體中文" : "简体中文"}</button>
		</div>
	);
}

export default RegHeader;