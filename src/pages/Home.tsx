import { useNavigate } from "react-router-dom";
export default function Home() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-wrap items-center justify-center w-[100vw] h-[100vh] bg-[#3c4048] ">
			<div className="flex justify-center w-[100%] med:w-[50%]">
				<button
					className="w-[250px] h-[100px] text-[20px] bg-[#fff] border-4 border-solid border-black rounded-[20px] hover:text-[28px] hover:shadow-[10px_10px_0_0_rgb(0,0,0)] hover:border-[#fff] hover:text-[#665A48] hover:bg-[#FAD6A5] hover:translate-x-[-15px] hover:translate-y-[-15px] transition-all"
					onClick={() => navigate("/products")}
				>
					Products
				</button>
			</div>
			<div className=" flex justify-center w-[100%] med:w-[50%]">
				<button
					className="w-[250px] h-[100px] text-[20px] bg-[#fff] border-4 border-solid border-black rounded-[20px] hover:text-[28px] hover:shadow-[10px_10px_0_0_rgb(0,0,0)] hover:border-[#fff] hover:text-[#665A48] hover:bg-[#FAD6A5] hover:translate-x-[-15px] hover:translate-y-[-15px] transition-all"
					onClick={() => navigate("/register")}
				>
					Registration
				</button>
			</div>
		</div>
	);
}
