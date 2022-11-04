/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import React, { useState, useEffect, useRef } from "react";
import playBtn from "../../img/products/elements/play-button.png";
import { getTouchEventData } from "./dom";
import { getRefValue, useSwiperRef } from "./useSwiper";
import useVideoPlayer from "./useVideoPlayer";

interface CarousellProps {
	type: string;
	imageList: { id: number; img: string; fileType: string }[];
	arrowBtn: JSX.Element;
	autoPlayTime: number;
	width: number;
}

export default function Carousell({
	type,
	imageList,
	arrowBtn,
	autoPlayTime,
	width,
}: CarousellProps) {
	const MIN_SWIPE_REQUIRE = 40;
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isSwiping, setIsSwiping] = useState(false);
	const videoElement = useRef(null);
	const timerRef = useRef<any>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const containerWidthRef = useRef(0);
	const [offsetX, setOffsetX, offsetXref] = useSwiperRef(0);
	const currentOffsetXRef = useRef(0);
	const startXRef = useRef(0);
	const minOffsetXRef = useRef(0);
	const { isPlaying, togglePlay, pauseVideo, handleOnTimeUpdate } =
		useVideoPlayer(videoElement);

	useEffect(() => {
		timerRef.current = setTimeout(() => {
			sliding();
		}, autoPlayTime);
		return () => clearTimeout(timerRef.current);
	}, [currentSlide]);

	function sliding() {
		const containerWidth = getRefValue(containerRef).offsetWidth;
		const slideIndex =
			currentSlide >= imageList.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(slideIndex);
		setOffsetX(-(containerWidth * slideIndex));
	}

	function handleVideoEnded() {
		togglePlay();
		timerRef.current = setTimeout(() => {
			sliding();
		}, autoPlayTime);
	}

	if (!isPlaying) {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			sliding();
		}, autoPlayTime);
	}

	function handleTouchEnd() {
		const containerWith = getRefValue(containerWidthRef);
		let newOffsetX = getRefValue(offsetXref);

		const diff = getRefValue(currentOffsetXRef) - newOffsetX;
		if (Math.abs(diff) > MIN_SWIPE_REQUIRE) {
			if (diff > 0) {
				newOffsetX = Math.floor(newOffsetX / containerWith) * containerWith;
			} else {
				newOffsetX = Math.ceil(newOffsetX / containerWith) * containerWith;
			}
		} else {
			newOffsetX = Math.round(newOffsetX / containerWith) * containerWith;
		}

		setIsSwiping(false);
		setOffsetX(newOffsetX);
		setCurrentSlide(Math.abs(newOffsetX / containerWith));

		window.removeEventListener("touchmove", handleTouchMove);
		window.removeEventListener("touchend", handleTouchEnd);
		window.removeEventListener("mousemove", handleTouchMove);
		window.removeEventListener("mouseup", handleTouchEnd);
	}

	function handleTouchStart(
		e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
	) {
		setIsSwiping(true);
		currentOffsetXRef.current = getRefValue(offsetXref);
		startXRef.current = getTouchEventData(e).clientX;

		const containerElement = getRefValue(containerRef);

		containerWidthRef.current = containerElement.offsetWidth;
		minOffsetXRef.current =
			containerElement.offsetWidth - containerElement.scrollWidth;

		window.addEventListener("touchmove", handleTouchMove);
		window.addEventListener("touchend", handleTouchEnd);
		window.addEventListener("mousemove", handleTouchMove);
		window.addEventListener("mouseup", handleTouchEnd);
	}

	function handleTouchMove(e: TouchEvent | MouseEvent) {
		const currentX = getTouchEventData(e).clientX;
		const diff = getRefValue(startXRef) - currentX;
		let newOffsetX = getRefValue(currentOffsetXRef) - diff;

		const maxOffsetX = 0;
		const minOffsetX = getRefValue(minOffsetXRef);
		if (newOffsetX > maxOffsetX) {
			newOffsetX = 0;
		}
		if (newOffsetX < minOffsetX) {
			newOffsetX = minOffsetX;
		}

		setOffsetX(newOffsetX);
	}

	function indicatorOnClick(index: number) {
		const containerWidth = getRefValue(containerRef).offsetWidth;
		setCurrentSlide(index);
		setOffsetX(-(containerWidth * index));
	}

	function lastImg() {
		const containerWidth = getRefValue(containerRef).offsetWidth;
		setCurrentSlide(currentSlide - 1);
		setOffsetX(-(containerWidth * (currentSlide - 1)));
	}

	function nextImg() {
		const containerWidth = getRefValue(containerRef).offsetWidth;
		setCurrentSlide(currentSlide + 1);
		setOffsetX(-(containerWidth * (currentSlide + 1)));
	}

	return (
		<div onTouchStart={handleTouchStart} onMouseDown={handleTouchStart}>
			<div
				className="relative flex flex-nowrap w-[100%] h-[100%] overflow-x-hidden"
				ref={containerRef}
			>
				{imageList.map((image, index) => (
					<div
						key={index}
						className="shrink-0 bg-cover touch-pan-y"
						style={{
							transform: `translate3d(${offsetX}px, 0, 0)`,
							transition: `${
								isSwiping ? "none" : "transform 0.3s ease-in-out"
							}`,
							width: `${width}px`,
						}}
					>
						{image.fileType === "img" ? (
							<img
								src={image.img}
								className="h-[703px] cursor-pointer"
								draggable={false}
							/>
						) : (
							<div className="relative">
								<button onClick={pauseVideo}>
									<video
										src={image.img}
										className="h-[703px]"
										ref={videoElement}
										onTimeUpdate={handleOnTimeUpdate}
										onEnded={handleVideoEnded}
										draggable={false}
									/>
								</button>
								<button
									className="absolute top-[330px] left-[230px] rounded-full"
									onClick={() => {
										togglePlay();
										clearTimeout(timerRef.current);
									}}
								>
									<img
										src={playBtn}
										className={`${isPlaying ? "hidden" : "block"}`}
									/>
								</button>
							</div>
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
						onClick={lastImg}
					>
						{arrowBtn}
					</button>
					<button
						className={`scale-x-[-1] cursor-pointer ${
							currentSlide === imageList.length - 1 && "hidden"
						} `}
						onClick={nextImg}
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
				{imageList.map((image, index) => (
					<button
						key={image.id}
						className={`${
							type === "products"
								? `w-2 h-2 rounded-full  ${
										index === currentSlide ? "bg-[#4b4e5b]" : "bg-[#d8d9d8]"
								  }`
								: `w-4 h-4 rounded-full border border-solid border-[#d2d2d2] ${
										index === currentSlide ? "bg-[#d9d9d9]" : "bg-[#fff]"
								  }`
						} cursor-pointer `}
						onClick={() => indicatorOnClick(index)}
					></button>
				))}
			</div>
		</div>
	);
}