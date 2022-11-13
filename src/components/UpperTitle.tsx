import { useContext } from "react";
import {simplised} from "../utili/chineseChanger";
import { UserContext } from "../utili/useContext";

type UpperTitleProps={
	page:string;
}

function UpperTitle({page}:UpperTitleProps) {

	const { simplified } = useContext(UserContext);


	return (<section className={`mt-[30px] flex flex-col justify-center items-center h-[136px] bg-[#fafafa] ${page==="reg" ?"md:mt-[58px]":"md:mt-[144px]"} ${page==="reg" ?"md:items-center":"md:items-start"} md:mb-[50px] md:w-[100%]`}>
		<span className="text-[24px] font-semibold md:text-[30px] lg:text-[48px]">{simplified?	simplised("iPhone新機搶先登記"):"iPhone新機搶先登記"}</span>
		<span className={`mt-[10px] text-[14px] md:text-[20px] lg:text-[24px] ${page==="reg" ? "md:mt-[66px]" : "md:mt-[10px]"}`}>{simplified?	simplised("活動日期：即日起 - 9/23 (限量預約登記，額滿為止)"):"活動日期：即日起 - 9/23 (限量預約登記，額滿為止)"}</span>
		<span className="text-[14px] text-[#ff5455] font-[500] text-center md:text-[20px] lg:text-[24px] md:text-left">{simplified?	simplised("登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支"):"登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支"}</span>
	</section> );
}

export default  UpperTitle;