/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { useState, useEffect } from "react";

interface CarousellProps {
	type: string;
	imageList: { id: number; img: string; fileType: string }[];
	arrowBtn: JSX.Element;
	autoPlayTime: number;
	hight: string;
}

export default function Carousell({
	type,
	imageList,
	arrowBtn,
	autoPlayTime,
	hight,
}: CarousellProps) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentSlide(
				currentSlide >= imageList.length - 1 ? 0 : currentSlide + 1
			);
		}, autoPlayTime);
		return () => clearTimeout(timer);
	}, [currentSlide]);

	return (
		<div>
			<div className="relative flex flex-nowrap w-[100%] h-[100%] overflow-x-hidden ">
				{imageList.map((image, index) => (
					<div
						key={index}
						className={`${hight} w-[100%] shrink-0 border border-solid cursor-pointer bg-cover transition-all ease-in-out duration-700`}
						style={{
							marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
						}}
					>
						{image.fileType === "img" ? (
							<img src={image.img} className="h-[703px]" />
						) : (
							<video src={image.img} className="h-[703px]" autoPlay muted />
						)}
					</div>
				))}
				<div
					className={`absolute flex items-center left-0 top-[335px] w-[100%] px-2 ${
						currentSlide === 0
							? "justify-end"
							: currentSlide === imageList.length - 1
							? "justify-start"
							: "justify-between"
					}`}
				>
					<button
						className={`cursor-pointer ${currentSlide === 0 && "hidden"}`}
						onClick={() => setCurrentSlide(currentSlide - 1)}
					>
						{arrowBtn}
					</button>
					<button
						className={`scale-x-[-1] cursor-pointer ${
							currentSlide === imageList.length - 1 && "hidden"
						} `}
						onClick={() => setCurrentSlide(currentSlide + 1)}
					>
						{arrowBtn}
					</button>
				</div>
				<div
					className={`${
						type === "products" ? "hidden" : "flex"
					} absolute right-2 top-2 justify-center w-10 h-5 rounded-full bg-[#888]`}
				>
					<p className="text-xs text-[#fff]">{`${currentSlide + 1}/${
						imageList.length
					}`}</p>
				</div>
			</div>

			<div className="flex justify-center mt-3 space-x-[10px]">
				{imageList.map((image) => (
					<button
						key={image.id}
						className={`${
							type === "products"
								? `w-2 h-2 rounded-full  ${
										image.id === currentSlide ? "bg-[#4b4e5b]" : "bg-[#d8d9d8]"
								  }`
								: `w-4 h-4 rounded-full border border-solid border-[#d2d2d2] ${
										image.id === currentSlide ? "bg-[#d9d9d9]" : "bg-[#fff]"
								  }`
						} cursor-pointer `}
						onClick={() => setCurrentSlide(image.id)}
					></button>
				))}
			</div>
		</div>
	);
}
