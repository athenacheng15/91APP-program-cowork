import BlankDiv from "../../../components/BlankDiv";
import RegRule from "../../../components/RegRule";
import SuccessHeader from "./SuccessHeader";
import SuccessInfo from "./SuccessInfo";

export default function SuccessWrapper() {
	return (
		<section className="w-[100%] flex flex-col h-[max-content] md:bg-[#eeeeee]">
			<SuccessHeader />
			<SuccessInfo />
			<div className="md:mt-[40px] flex justify-center">
				<RegRule />
			</div>
			
			<BlankDiv />
		</section>
	);
}
