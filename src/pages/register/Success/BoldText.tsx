type BoldTextProps={ content: string; }

function BoldText({content}:BoldTextProps) {
	return ( 
		<div className="text-[#333333] font-[700] text-[14px]">{content}</div>
	);
}

export default BoldText;