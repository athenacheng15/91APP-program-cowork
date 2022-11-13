import { Outlet } from "react-router-dom";
import RegLowerButton from "../../components/RegLowerButton";
import logo from "../../img/register/91Logo.png";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {UserContext} from "../../utili/useContext";
import RegHeader from "../../components/RegHeader";
import {simplised} from "../../utili/chineseChanger";


export default function Register() {
	const location = useLocation();
	const[buttonText,setButtonText]=useState<string>("");
	const[navLink,setNavLink]=useState<string>("/");
	const[xOffSet,setXOffSet]=useState<number>(-22);
	const[showPopUp,setShowPopUp]=useState<boolean>(false);
	const[showReg,setShowReg]=useState<boolean>(false);
	const [simplified,setSimplified]=useState<boolean>(false);
	const[clicksOnSimplified,setClicksOnSimplified]=useState<number>(0);
	
	useEffect(()=>{
		switch(location.pathname){
		case "/register":{
			let text="搶先登記";
			text=simplified?simplised(text):text;
			setButtonText(text);
			setNavLink("/register/form");
			break;
		}
		case "/register/form":{
			let text="選擇商品";
			text=simplified?simplised(text):text;
			setButtonText(text);
			setNavLink("/register/selection");
			break;
		}
		case "/register/selection":{
			let text="送出";
			text=simplified?simplised(text):text;
			setButtonText(text);
			setNavLink("/register/success");
			break;
		}
		case "/register/success":{
			let text="加入會員";
			text=simplified?simplised(text):text;
			setButtonText(text);
			setNavLink("/register");
			break;
		}
		default:
			return;
		}
	},[location,simplified]);

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

	useEffect(()=>navigator.language==="zh-CN"? setSimplified(true):setSimplified(false),[]);

	
	useEffect(()=>{clicksOnSimplified>0&&localStorage.setItem("language", JSON.stringify(simplified));},[clicksOnSimplified]);

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
				<RegHeader clicksOnSimplified={clicksOnSimplified} setClicksOnSimplified={setClicksOnSimplified}/>
				<Outlet />
				<RegLowerButton buttonText={buttonText} navLink={navLink}/>
			</section>
		</UserContext.Provider>
	// 改進：react helmet 
	);
}
