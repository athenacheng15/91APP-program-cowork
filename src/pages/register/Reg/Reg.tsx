import Blank from "../../../components/Blank";
import UpperTitle from "../../../components/UpperTitle";
import InputForm from "./InputForm";

export default function Reg() {
	return <section className="h-[max-content] bg-[#fafafa] flex flex-col">
		<UpperTitle />
		<InputForm />
		<Blank />
	</section>;
}
