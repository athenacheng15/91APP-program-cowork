import {
	ChevronRightIcon,
	ChevronLeftIcon
} from "@primer/octicons-react";

type GalleryProps={
    image:string;
}

function Gallery({image}:GalleryProps) {
	return ( <section className="w-[100%] h-[375px] bg-[#f9f9f9] flex flex-col items-center justify-center md:h-[max-content] md:bg-white md:mt-[72px]">
		<img src={image} alt="" className="w-[295px] h-[349px] md:w-[426px] md:h-[426px]"></img>
		<div className="hidden md:flex w-[100%] justify-center md:mb-[70px]">
			<ChevronLeftIcon size={24} fill="#8e8e8e" className="mr-[20px] self-center cursor-pointer" />
			<div className="w-[426px] h-[84px] bg-[navy]"></div>
			<ChevronRightIcon size={24} fill="#8e8e8e" className="ml-[20px] self-center cursor-pointer" />
		</div>
	</section> );
}

export default Gallery;