/* eslint-disable indent */
import { useState, useEffect } from "react";

interface CarousellProps {
	imageList: { id: number; img: string }[];
	arrowBtn: JSX.Element;
	autoPlay: boolean;
	autoPlayTime: number;
	hight: string;
}

export default function Carousell({
	imageList,
	arrowBtn,
	autoPlay,
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
						className={`${hight} w-[100%] shrink-0 border border-solid bg-cover transition-all ease-in-out duration-700`}
						style={{
							backgroundImage: `url(${image.img})`,
							marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
						}}
					>
						{/* <img src={image.img} className="h-[703px]" /> */}
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
			</div>

			<div className="flex justify-center mt-3 space-x-[10px]">
				{imageList.map((image) => (
					<button
						key={image.id}
						className={`w-2 h-2 rounded-full cursor-pointer ${
							image.id === currentSlide ? "bg-[#4b4e5b]" : "bg-[#d8d9d8]"
						} `}
						onClick={() => setCurrentSlide(image.id)}
					></button>
				))}
			</div>
		</div>
	);
}
