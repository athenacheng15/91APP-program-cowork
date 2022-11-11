type PopUpProps={
    title:string;
    content:string;
    buttonText:string;
    buttonFunction: () => any;
}

function PopUp({title,content,buttonText,buttonFunction}:PopUpProps) {
	return ( 
		<>
			<div className="w-[100%] h-[100%] bg-black-rgba fixed z-[2] right-0 top-[0px]">
				<section className="w-[100%] h-[100%] bg-white opacity-0 fixed z-[2]"></section>
				<section className="z-[2] bg-white fixed top-[45%] self-center w-[290px] h-[165px] rounded-md flex flex-col items-center justify-center md:top-[40%] left-[50%] translate-x-[-50%]">
					<div className="text-[16px] font-[500] my-[18.5px]">{title}</div>
					<div className="text-[13px] mb-[30px]">{content}</div>
					<div 
						onClick={()=>buttonFunction()}
						className="w-[90%] h-[40px] cursor-pointer bg-[#fe494e] rounded-md flex items-center justify-center">
						<div className="text-white text-[15px]">{buttonText}</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default PopUp;