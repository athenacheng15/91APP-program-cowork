import { useContext, useEffect } from "react";
import { UserContext } from "../../../utili/useContext";
import {simplised} from "../../../utili/chineseChanger";


type TitlePriceProps={
	title:string;
	price:string;
}

function TitlePrice({title,price}:TitlePriceProps) {
	const {simplified } = useContext(UserContext);


	return ( <section className="w-[90%] self-center h-[max-content] flex flex-col md:mt-[72px]">
		<div className="mt-[16px] mb-[19px] text-[16px] font-[500]">{title}</div>
		{price.length!==0 && (<div className="text-[#FF5353] text-[20px] font-[500]">NT${price}</div>)}
		<div className="text-[#FF5353] mt-[8px] mb-[12px] text-[14px]">{simplified?simplised("登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支；一經送出商品選項，不得修改"):"登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支；一經送出商品選項，不得修改"}</div>
	</section> );
}

export default TitlePrice;