import { useContext } from "react";
import { UserContext } from "../utili/useContext";

function BlankDiv() {

	const { regInfo } = useContext(UserContext);

	return ( <section className={`w-[100%] ${regInfo.price===undefined ? "h-[70px]" : "h-[120px]"} bg-white`}></section> );
}

export default BlankDiv;