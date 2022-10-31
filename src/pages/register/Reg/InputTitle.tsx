type InputTitleProps={
    text:string;
}

function InputTitle({text}:InputTitleProps) {
	return ( <div className="flex mt-[20px] w-[90%] self-center mb-[5px]"><span className="text-[#ff5455] text-[14px]">*</span>
		{" "}<span className="text-[14px]">{text}</span>
	</div> );
}

export default InputTitle;