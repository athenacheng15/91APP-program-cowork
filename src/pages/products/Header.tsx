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
];

export default function Header() {
	return (
		<div className="w-[100%] h-[auto] min-h-[100px] bg-[#c89185]">
			<div className="flex justify-between items-center w-[1180px] h-[100px] m-[auto]">
				<div className="w-[216px] h-[65px] bg-white mr-[2%]">
					<img src={logo} className="m-[auto]"></img>
				</div>
				<div className="flex w-[auto] max-w-[685px] grow space-x-5">
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
						<div className="flex items-center space-x-[10px] mr-6">
							<button>
								<img src={phone} />
							</button>
							<button>
								<img src={profile} />
							</button>
							<button className="flex">
								<img src={cart} />
								<div className="w-[32px] h-[16px] bg-[#ff5353] text-white text-xs rounded-full ml-[5px]">
									10
								</div>
							</button>
						</div>
						<div className="flex space-x-[10px]">
							<HeaderSelector text="繁體中文" img={lan} />
							<HeaderSelector text="TWD" img={dollars} />
						</div>
					</div>
					<div className="flex items-center justify-end h-[50px] w-[285px] relative">
						<input
							className="w-[214px] h-[26px] px-3 text-xs rounded-full"
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
		<div className="flex w-[auto] h-[auto] min-h-[100px] items-end mb-[17.5px]">
			<p className="mr-1">{text}</p>
			<button className="flex items-center cursor-pointer">
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
		<div className="flex items-center ">
			<img className="w-[15px] h-[15px] mr-1" src={img} />
			<p className="text-xs">{text}</p>
			<img src={chevron_s} />
		</div>
	);
}
