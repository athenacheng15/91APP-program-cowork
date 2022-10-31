import EachSelector from "./EachSelector";
import {iPhoneColorList} from "../../../data/registerData";

function Selector() {
	const typeList=[{name:"iPhone 13"},{name:"iPhone 13 Pro"}];
	// const colorList=[{name:"粉紅色",color:"#FAE1DC"},{name:"藍色",color:"#3d6c85"}];
	const sizeList=[{name:"64GB"},{name:"128GB"},{name:"256GB"}];


	return ( <section className="w-[90%] self-center">
		<div className="mb-[15px] text-[14px]">選擇型號</div>
		<div className="flex">
			<EachSelector info={typeList} />
		</div>
		<div className="mb-[5px] text-[14px] mt-[15px]">選擇色彩</div>
		<div className="flex flex-wrap">
			<EachSelector info={iPhoneColorList} />
		</div>
		<div className="mb-[15px] text-[14px] mt-[15px]">選擇容量</div>
		<div className="flex mb-[15px]">
			<EachSelector info={sizeList} />
		</div>
	</section> );
}

export default Selector;