import Blank from "../../../components/Blank";
import RegRule from "../../../components/RegRule";
import UpperTitle from "../../../components/UpperTitle";
import Schedule from "./Schedule";

export default function Land() {
	return <section className="min-h-[1195px] bg-[#fafafa] flex flex-col items-center md:flex-row md:items-start md:flex-wrap">
		<div className="w-[100%] flex-col flex md:flex-row md:justify-center">
			<div className="flex-col flex w-[100%] items-center md:order-2 md:w-[max-content] md:max-w-[40%] md:justify-center">
				<UpperTitle />
				<Schedule />
			</div>
			<Blank />
		</div>
		<div className="flex flex-col w-[100%] items-center md:order-3 md:mt-[29px]">
			<RegRule />
		</div>
	</section>;
}
