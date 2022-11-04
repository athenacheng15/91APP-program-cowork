import { useState } from "react";
import { sideBarList } from "../../data/productsData";
import chevron_m from "../../img/products/elements/chevron_m.png";

export default function SideBar() {
	return (
		<div className="text-[14px] text-[#999] w-[196px] space-y-3">
			{sideBarList.map((item) => (
				<LinkGroup key={item.title} title={item.title} content={item.items} />
			))}
		</div>
	);
}

interface LinkGroupProps {
	title: string;
	content?: string[];
}
 
function LinkGroup({ title, content }: LinkGroupProps) {
	const [linkVis, setLinkVis] = useState(false);
	const [chevronVis, setChevronVis] = useState(true);
	return (
		<>
			<button
				className="flex justify-between w-[196px] cursor-pointer"
				onClick={() => {
					setLinkVis(!linkVis);
					setChevronVis(!chevronVis);
				}}
			>
				<p>{title}</p>
				<img
					src={chevron_m}
					className={`${content && chevronVis ? "block" : "hidden"}`}
				/>
			</button>
			<div className={`${linkVis ? "block" : "hidden"} pl-[18px] space-y-3`}>
				{content?.map((link) => (
					<button
						key={link}
						className="w-[180px] text-left hover:text-[#333] hover:underline"
					>
						{link}
					</button>
				))}
			</div>
		</>
	);
}
