import Blank from "../../../components/Blank";
import UpperTitle from "../../../components/UpperTitle";
import InputForm from "./InputForm";

export default function Reg() {
	return <section className="h-[max-content] bg-[#fafafa] flex flex-col md:items-center md:min-h-[864px]">
		<UpperTitle page="reg"/>
		<InputForm />
		<div className="block md:hidden">
			<Blank />
		</div>
	</section>;
}
