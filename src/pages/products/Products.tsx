import {
	group1List,
	group2List,
	sideList,
	sideBarList,
} from "../../data/productsData";
import Header from "./Header";
import Footer from "./Footer";
export default function Product() {
	return (
		<>
			<Header />
			<div className="w-[1180px] m-auto">
				<div className="flex h-12 items-center">
					<p className="text-[#C89185]">{"首頁 > 日本穿搭 > 穿搭介紹"}</p>
				</div>
				<div className="flex">
					<div className="bg-slate-300 w-[265px] h-[800px] mr-[35px]"></div>
					<div className="bg-slate-300 w-[880px] h-[800px]"></div>
				</div>
			</div>
			<Footer />
		</>
	);
}
