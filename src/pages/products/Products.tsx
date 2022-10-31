import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Content from "./Content";
export default function Product() {
	return (
		<>
			<Header />
			<div className="w-[1180px] m-auto">
				<div className="flex h-12 items-center">
					<p className=" text-[14px] text-[#C89185]">
						{"首頁 > 日本穿搭 > 穿搭介紹"}
					</p>
				</div>
				<div className="flex">
					<div className="w-[265px] h-[auto] mr-[35px]">
						<SideBar />
					</div>
					<div className="w-[880px] h-[auto]">
						<Content />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
