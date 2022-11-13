import Blank from "../../../components/Blank";
import UpperTitle from "../../../components/UpperTitle";
import InputForm from "./InputForm";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { UserContext } from "../../../utili/useContext";
import {simplised} from "../../../utili/chineseChanger";

export default function Reg() {
	const { simplified } = useContext(UserContext);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{simplified?simplised("iPhone搶購・立刻登記"):"iPhone搶購・立刻登記"}</title>
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
