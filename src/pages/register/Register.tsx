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
			setNavLink("/register/form");
			break;
		}
		case "/register/form":{
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
		name:"",
		phone:"",
		email:"",
		checked:null,
		type:"",
		color:"",
		size:""
	});

	const[xOffSet,setXOffSet]=useState<number>(-22);
	const[showPopUp,setShowPopUp]=useState<boolean>(false);
	const[showReg,setShowReg]=useState<boolean>(false);
	const [simplified,setSimplified]=useState<boolean>(false);
	
	useEffect(()=>localStorage.setItem("language", JSON.stringify(simplified)),[simplified]);

	useEffect(()=>{
		const localSimplified=localStorage.getItem("language");
		if(localSimplified!==null){
			localSimplified==="true"?setSimplified(true):setSimplified(false);
		}else{
			localStorage.setItem("language", JSON.stringify(simplified));
		}
	},[]);


	return (
		<UserContext.Provider value={{ regInfo, setRegInfo,proPostInfo,setProPostInfo,xOffSet,setXOffSet,showPopUp,setShowPopUp,showReg,setShowReg,simplified,setSimplified }}>
			<section className="w-[100%]">
				<RegHeader />
				<Outlet />
				<RegLowerButton buttonText={buttonText} navLink={navLink}/>
			</section>
		</UserContext.Provider>
	// 改進：react helmet 
	);
}
