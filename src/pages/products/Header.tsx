import { useNavigate } from "react-router-dom";
import logo from "../../img/products/elements/logo.png";
import chevron_s from "../../img/products/elements/chevron_s.png";
import phone from "../../img/products/elements/icon01-phone.png";
import profile from "../../img/products/elements/icon02-profile.png";
import cart from "../../img/products/elements/icon03-cart.png";
import lan from "../../img/products/elements/icon04-lan.png";
import dollars from "../../img/products/elements/icon05-dollars.png";
import search from "../../img/products/elements/icon06-search.png";

const dropDownList = [
	{ name: "商品分類", dropDown: true },
	{ name: "Latest Promotions", dropDown: true },
	{ name: "Crayon Shinchan 15% off", dropDown: false },
	{ name: "Best Sellers", dropDown: false },
	{ name: "Our Videos", dropDown: false },
];

export default function Header() {
	const navigate = useNavigate();
	return (
		<div className="h-[auto] min-h-[100px] w-[100%] bg-[#c89185]">
			<div
				className="m-[auto] flex h-[auto]  w-[1180px] items-start justify-between"
				onClick={() => navigate("/")}
			>
				<button className="mr-[2%] mt-[17.5px] h-[65px] w-[216px] bg-white">
					<img src={logo} className="m-[auto]" />
				</button>
				<div className="mt-[67px] flex h-[auto] w-[100%] max-w-[685px] grow flex-wrap text-[14px]">
					{dropDownList.map((item) => (
						<HeaderDropDown
							key={item.name}
							text={item.name}
							dropDown={item.dropDown}
						/>
					))}
				</div>
				<div>
					<div className="flex h-[50px] w-[285px] ">
						<div className="mr-6 flex items-center space-x-[10px]">
							<button>
								<img src={phone} />
							</button>
							<button>
								<img src={profile} />
							</button>
							<button className="flex">
								<img src={cart} />
								<div className="ml-[5px] h-[16px] w-[32px] rounded-full bg-[#ff5353] text-xs text-white">
									10
								</div>
							</button>
						</div>
						<div className="flex space-x-[10px]">
							<HeaderSelector text="繁體中文" img={lan} />
							<HeaderSelector text="TWD" img={dollars} />
						</div>
					</div>
					<div className="relative flex h-[50px] w-[285px] items-center justify-end">
						<input
							className="h-[26px] w-[214px] rounded-full px-3 text-xs"
							placeholder="搜尋商品"
						/>

						<img src={search} className="absolute right-2" />
					</div>
				</div>
			</div>
		</div>
	);
}

interface HeaderDropDownProps {
	text: string;
	dropDown: boolean;
}

function HeaderDropDown({ text, dropDown }: HeaderDropDownProps) {
	return (
		<div className="mr-5 mb-[17.5px] flex h-[auto] w-[auto] items-end">
			<p className="mr-1">{text}</p>
			<button className="flex cursor-pointer items-center">
				<img src={chevron_s} className={`${dropDown ? "block" : "hidden"}`} />
			</button>
		</div>
	);
}

interface HeaderSelectorProps {
	text: string;
	img: string;
}

function HeaderSelector({ text, img }: HeaderSelectorProps) {
	return (
		<button className="flex items-center ">
			<img className="mr-1 h-[15px] w-[15px]" src={img} />
			<p className="text-xs">{text}</p>
			<img src={chevron_s} />
		</button>
	);
}
