type ValidationProps={
    text:string;
    warning?:string[];
}

function ValidationWarning({text,warning}:ValidationProps) {
	return ( <>
		<div className={`text-[13px] text-[#ff5455] mt-[3px] w-[90%] self-center mb-[8px] ${text.includes("手機")&&"md:self-start"}`}>{text}</div>
    
	</> );
}

export default ValidationWarning;