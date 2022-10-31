import fbBanner from "../../img/products/elements/footer-fbblock.png";
import facebook from "../../img/products/elements/footer-fb.png";
import line from "../../img/products/elements/footer-line.png";
import instagram from "../../img/products/elements/footer-ig.png";
import ios from "../../img/products/elements/footer-ios.png";
import google from "../../img/products/elements/footer-google.png";

const footerLink = [
	{
		title: "關於我們",
		links: ["品牌故事", "商店簡介", "門市資訊", "隱私權條款"],
	},
	{
		title: "購物說明",
		links: ["付款方式", "運送方式", "退換貨方式"],
	},
	{
		title: "客服資訊",
		links: ["客服留言", "常見問題", "會員權益說明", "聯絡我們"],
	},
];

export default function Footer() {
	return (
		<div className="w-[100%] h-[260px] border-t mt-[89px] pt-10 pb-6">
			<div className="m-[auto] w-[1180px] h-[100%]">
				<div className="flex justify-between ">
					<div>
						<img src={fbBanner} className="w-[340px]" />
						<div className="flex space-x-2 mt-2">
							<img src={facebook} />
							<img src={line} />
							<img src={instagram} />
						</div>
					</div>
					<div className="flex space-x-20 text-[#333333]">
						<div className="flex space-x-20 ">
							{footerLink.map((group) => (
								<div key={group.title} className="w-[100px] space-y-2">
									<p className="text-[16px]">{group.title}</p>
									{group.links.map((link) => (
										<a key={link} className="h-5 text-xs block ">
											{link}
										</a>
									))}
								</div>
							))}
						</div>
						<div className=" w-[200px] space-y-2">
							<p className="text-[16px]">官方APP</p>
							<input
								type="text"
								className="w-[100%] h-10 pl-3 border-[#bbbbbb] border-solid rounded-[4px] text-[14px] placeholder:font-light placeholder:text-[#bbbbbb]"
								placeholder="請輸入台灣手機號碼"
							/>
							<button className="w-[100%] h-10 pr-7 bg-[#333] rounded-[4px] text-[14px] text-[#fff] font-thin cursor-pointer">
								免費傳送載點至手機
							</button>
							<div className="flex justify-between">
								<img src={ios} />
								<img src={google} />
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between mt-3 text-[#bbbbbb] text-xs  w-[100%]">
					<p>＠2015 by 紘瑞國際股份有限公司</p>
					<p className="pr-12">
						本站最佳瀏覽環境請使用Google Chrome、Firefox或Edge以上版本
					</p>
				</div>
			</div>
		</div>
	);
}
