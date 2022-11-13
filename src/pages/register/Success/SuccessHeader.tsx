import { useContext } from "react";
import successLogo from "../../../img/register/success-logo.png";
import {simplised} from "../../../utili/chineseChanger";
import { UserContext } from "../../../utili/useContext";


function SuccessHeader() {
	const { simplified } = useContext(UserContext);
	
	return ( <section className="bg-white flex flex-col items-center w-[100%] h-[max-content] mb-[12px]">
		<div className="mt-[30px] text-[24px] font-[700] mb-[2px] md:text-[64px]">{simplified?simplised("恭喜您！驗證成功"):"恭喜您！驗證成功"}</div>
		<img src={successLogo} alt="" className="h-[96px] w-[123px] mt-[23px] mb-[36px]"></img>
		<div className="text-[16px] text-center leading-7 md:text-[24px] md:leading-9 md:font-[300]">{simplified?simplised("已完成iPhone 13登記"):"已完成iPhone 13登記"} <br /> {simplified?simplised("敬請等候開賣通知"):"敬請等候開賣通知"}</div>
		<div className="mt-[18px] text-[16px] leading-7 text-[#FF5353] w-[91%] text-center md:text-[24px] md:mb-[30px] md:mt-[80px]">{simplified?simplised("注意：簡訊驗證通過才算有登記，登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支"):"注意：簡訊驗證通過才算有登記，登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支"}</div>
	</section> );
}

export default SuccessHeader;