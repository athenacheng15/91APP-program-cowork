import { useContext } from "react";
import { UserContext } from "../../../utili/useContext";

function BlankDiv() {

	const { regInfo, setRegInfo } = useContext(UserContext);

	return ( <section className={`w-[100%] ${regInfo.price===undefined ? "h-[70px]" : "h-[120px]"}`}></section> );
}

export default BlankDiv;