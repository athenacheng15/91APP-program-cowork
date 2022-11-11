type ValidationProps={
    text:string;
    warning?:string[];
}

function ValidationWarning({text,warning}:ValidationProps) {
	return ( <>
		<div className="text-[13px] text-[#ff5455] mt-[3px] w-[90%] self-center mb-[8px]">{text}</div>
    
	</> );
}

export default ValidationWarning;