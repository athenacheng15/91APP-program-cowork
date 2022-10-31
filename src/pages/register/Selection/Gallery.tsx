
type GalleryProps={
    image:string;
}

function Gallery({image}:GalleryProps) {
	return ( <section className="w-[100%] h-[375px] bg-[#f9f9f9] flex items-center justify-center">
		<img src={image} alt="" className="w-[295px] h-[349px]"></img>
	</section> );
}

export default Gallery;