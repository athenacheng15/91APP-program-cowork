import EachSelector from "./EachSelector";
import {iPhoneColorList, typeList, sizeList} from "../../../data/registerData";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utili/useContext";
import {simplised} from "../../../utili/chineseChanger";


function Selector() {

	const {simplified} = useContext(UserContext);

	
	return ( <section className="w-[90%] self-center">
		<div className="mb-[15px] text-[14px]">{simplified?simplised("選擇型號"):"選擇型號"}</div>
		<div className="flex flex-wrap">
			<EachSelector info={typeList} localType="type"/>
		</div>
		<div className="mb-[5px] text-[14px] mt-[15px]">{simplified?simplised("選擇色彩"):"選擇色彩"}</div>
		<div className="flex flex-wrap">
			<EachSelector info={iPhoneColorList} localType="color"/>
		</div>
		<div className="mb-[15px] text-[14px] mt-[15px]">{simplified?simplised("選擇容量"):"選擇容量"}</div>
		<div className="flex mb-[15px]">
			<EachSelector info={sizeList} localType="size"/>
		</div>
	</section> );
}

export default Selector;