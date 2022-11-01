import EachSelector from "./EachSelector";
import {iPhoneColorList,registerData} from "../../../data/registerData";

function Selector() {
	const typeList=[{name:"iPhone 13"},{name:"iPhone 13 Pro"}];
	const sizeList=[{name:"64GB"},{name:"128GB"},{name:"256GB"}];
	// console.log(registerData.filter((item:any)=>(item.type==="iPhone 13")));
	

	return ( <section className="w-[90%] self-center">
		<div className="mb-[15px] text-[14px]">選擇型號</div>
		<div className="flex">
			<EachSelector info={typeList} localType="type"/>
		</div>
		<div className="mb-[5px] text-[14px] mt-[15px]">選擇色彩</div>
		<div className="flex flex-wrap">
			<EachSelector info={iPhoneColorList} localType="color"/>
		</div>
		<div className="mb-[15px] text-[14px] mt-[15px]">選擇容量</div>
		<div className="flex mb-[15px]">
			<EachSelector info={sizeList} localType="size"/>
		</div>
	</section> );
}

export default Selector;