import { Outlet } from "react-router-dom";
import RegLowerButton from "../../components/RegLowerButton";
import logo from "../../img/register/91Logo.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {UserContext} from "../../utili/useContext";
import RegHeader from "../../components/RegHeader";

export default function Register() {
	const location = useLocation();
	const[buttonText,setButtonText]=useState<string>("");
	const[navLink,setNavLink]=useState<string>("/");
	
	useEffect(()=>{
		switch(location.pathname){
		case "/register":{
			setButtonText("搶先登記");
			setNavLink("/register/reg");
			break;
		}
		case "/register/reg":{
			setButtonText("選擇商品");
			setNavLink("/register/selection");
			break;
		}
		case "/register/selection":{
			setButtonText("送出");
			setNavLink("/register/success");
			break;
		}
		case "/register/success":{
			setButtonText("加入會員");
			setNavLink("/");
			// 改進：因為實際上沒有加入會員功能，所以設定會到主頁
			break;
		}
		default:
			return;
		}
	},[location]);

	const [regInfo, setRegInfo] = useState({
		name:"",
		phone:"",
		email:"",
		checked:null,
		type:"",
		color:"",
		size:"",
		price:""
	});

	const [proPostInfo, setProPostInfo] = useState({
		//避免lower button的useEffect在onchange的時候被觸發
		name:"",
		phone:"",
		email:"",
		checked:null,
		type:"",
		color:"",
		size:""
	});

	const[xOffSet,setXOffSet]=useState<number>(-22);

	


	return (
		<UserContext.Provider value={{ regInfo, setRegInfo,proPostInfo,setProPostInfo,xOffSet,setXOffSet }}>
			<section className="w-[100%]">
				<RegHeader />
				<Outlet />
				<RegLowerButton buttonText={buttonText} navLink={navLink}/>
			</section>
		</UserContext.Provider>
	// 改進：react helmet 
	);
}
