import { group1List, group2List, sideList } from "../../data/productsData";
import like from "../../img/products/elements/icon08-like.png";
import cart from "../../img/products/elements/icon07-cart.png";

export default function Content() {
	return (
		<>
			<div className="flex">
				<div className="w-[100%] h-[790px]">
					<div className="h-[100%] w-[528px] mr-[17px] bg-slate-600"></div>
					<div></div>
				</div>
				<div className="w-[100%]">
					<div className="mb-[30px]">
						<p className="text-[20px] font-medium">
							柏高島屋ステーションモール店
						</p>
						<p className="text-[14px]">GLOBAL WORK</p>
						<p className="text-[14px]">152cm</p>
					</div>
					<p className="text-[16px]">穿著單品</p>
					<div>
						{sideList.map((item) => (
							<Card
								key={item.id}
								brand={item.brand}
								name={item.name}
								imgUrl={item.imgUrl}
								originalPrice={item.originalPrice}
								price={item.price}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="w-[100%] mt-[44px]">
				<AdditionalBar title="此店員其他穿搭" contentList={group1List} />
				<AdditionalBar title="其他穿搭推薦" contentList={group2List} />
			</div>
		</>
	);
}

interface CardProps {
	brand: string;
	name: string;
	imgUrl: string;
	originalPrice: number;
	price: number;
}

function Card({ brand, name, imgUrl, originalPrice, price }: CardProps) {
	return (
		<div className="flex w-[100%] h-[168px] border-b border-[#eee] border-solid py-5 pl-5 last:border-0">
			<img src={imgUrl} className="w-[108px] h-[128px] mr-[17px]" />
			<div className="text-[14px] w-[190px] h-[128px]">
				<p className="text-[#999]">{brand}</p>
				<p className="mb-8">{name}</p>
				<p className="text-xs text-[#999] line-through">NT${originalPrice}</p>
				<div className="flex justify-between">
					<p className="text-[16px] text-[#ff655d]">NT${price}</p>
					<div className="flex space-x-3">
						<button className="cursor-pointer">
							<img src={like} />
						</button>
						<button className="cursor-pointer">
							<img src={cart} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

interface AdditionalBarProps {
	title: string;
	contentList: { id: number; imgUrl: string }[];
}

function AdditionalBar({ title, contentList }: AdditionalBarProps) {
	return (
		<>
			<p>{title}</p>
			<div className="flex justify-between mb-[60px] mt-[14px]">
				{contentList.map((item) => (
					<img
						key={item.id}
						src={item.imgUrl}
						className="w-[132px] cursor-pointer"
					/>
				))}
			</div>
		</>
	);
}