import Blank from "../../../components/Blank";
import UpperTitle from "../../../components/UpperTitle";
import InputForm from "./InputForm";
import { Helmet } from "react-helmet";

export default function Reg() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>iPhone搶購・立刻登記</title>
				<link rel="canonical" href="/App" />
			</Helmet>
			<section className="h-[max-content] bg-[#fafafa] flex flex-col md:items-center md:min-h-[864px]">
				<UpperTitle page="reg"/>
				<InputForm />
				<div className="block md:hidden">
					<Blank />
				</div>
			</section>
		</>
	);
}
