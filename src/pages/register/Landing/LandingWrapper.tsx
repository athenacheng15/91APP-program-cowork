import RegRule from "../../../components/RegRule";
import UpperTitle from "../../../components/UpperTitle";
import Schedule from "./Schedule";
import Carousell from "../../carousell/Carousell";
import { registerCarousellData } from "../../../data/registerData";
import arrowImg from "../../../img/register/CarousellArrow.png";

export default function Land() {
	return (
		<section className="flex min-h-[1195px] flex-col items-center bg-[#fafafa] md:flex-row md:flex-wrap md:items-start">
			<div className="flex w-[100%] flex-col items-center md:flex-row md:justify-center">
				<div className="flex w-[100%] flex-col items-center md:order-2 md:w-[max-content] md:max-w-[40%] md:justify-center">
					<UpperTitle page="landing" />
					<Schedule />
				</div>
				<div className="flex h-[350px] w-[524px] items-end justify-center md:mt-28">
					<div className="h-[350px] w-[350px]">
						<Carousell
							type="register"
							imageList={registerCarousellData}
							autoPlayTime={2000}
							width={350}
							height={350}
							arrowBtn={<ArrowBtn />}
							arrowBtnheight={175}
						/>
					</div>
				</div>
			</div>
			<div className="mt-2 flex w-[100%] flex-col items-center md:order-3 md:mt-[29px]">
				<RegRule />
			</div>
		</section>
	);
}

function ArrowBtn() {
	return (
		<button className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#fff] shadow-md">
			<img src={arrowImg} />
		</button>
	);
}
