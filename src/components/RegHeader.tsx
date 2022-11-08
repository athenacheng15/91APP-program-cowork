import logo from "../img/register/91Logo.png";
import { useNavigate } from "react-router-dom";

function RegHeader() {
	const navigate = useNavigate();

	return ( 
		<div className="h-[57px] bg-[#ff5455] flex items-center">
			<img 
				onClick={()=>navigate("/")}
				src={logo} alt="" className="w-[75px] h-[21px] ml-[20px] cursor-pointer"></img>
		</div>
	);
}

export default RegHeader;