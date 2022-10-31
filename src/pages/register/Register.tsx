import { Outlet } from "react-router-dom";
import RegLowerButton from "../../components/RegLowerButton";
import logo from "../../img/register/91Logo.png";
import { useLocation } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import {UserContext} from "../../utili/useContext";

export default function Register() {
	const location = useLocation();
	const[buttonText,setButtonText]=useState<string>("");
	const[navLink,setNavLink]=useState<string>("/");
	// const [cartItems, dispatch] = useReducer(reducer,[]);

	// function reducer(){
	// 	return;
	// }
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
			setNavLink("/register");
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
		checked:false
	});

	const [proPostInfo, setProPostInfo] = useState({
		//避免lower button的useEffect在onchange的時候被觸發
		name:"",
		phone:"",
		email:"",
		checked:false
	});
	


	return (
		<UserContext.Provider value={{ regInfo, setRegInfo,proPostInfo,setProPostInfo }}>
			<section className="w-[100%]">
				<div className="h-[57px] bg-[#ff5455] flex items-center">
					<img src={logo} alt="" className="w-[75px] h-[21px] ml-[20px] cursor-pointer"></img>
				</div>
				<Outlet />
				<RegLowerButton buttonText={buttonText} navLink={navLink}/>
			</section>
		</UserContext.Provider>

	);
}
