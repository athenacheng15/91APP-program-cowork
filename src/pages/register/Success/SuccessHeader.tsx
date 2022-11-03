import successLogo from "../../../img/register/success-logo.png";

function SuccessHeader() {
	return ( <section className="bg-white flex flex-col items-center w-[100%] h-[max-content] mb-[12px]">
		<div className="mt-[30px] text-[24px] font-[700] mb-[2px]">恭喜您！驗證成功</div>
		<img src={successLogo} alt="" className="h-[96px] w-[123px] mt-[23px] mb-[36px]"></img>
		<div className="text-[16px] text-center leading-7">已完成iPhone 13登記 <br /> 敬請等候開賣通知</div>
		<div className="mt-[18px] text-[16px] leading-7 text-[#FF5353] w-[91%] text-center">注意：簡訊驗證通過才算有登記，登記的手機號碼需與網購會員手機號碼相同，每會員帳號限登記一支</div>
	</section> );
}

export default SuccessHeader;