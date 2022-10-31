import Blank from "../../../components/Blank";
import UpperTitle from "../../../components/UpperTitle";
import Schedule from "./Schedule";

export default function Land() {
	return <section className="min-h-[1195px] bg-[#fafafa] flex flex-col items-center">
		<UpperTitle />
		<Schedule />
		<Blank />
	</section>;
}
