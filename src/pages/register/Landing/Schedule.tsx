import register from "../../../img/register/register.png";
import cart from "../../../img/register/cart.png";
import clock from "../../../img/register/clock.png";
import confirm from "../../../img/register/confirm.png";
import rightArrow from "../../../img/register/rightArrow.png";


function Schedule() {
	type ScheduleListProps={
		id:number;
		img:string;
		text:string;
	}
	
	const scheduleList=[{id:0,img:register,text:"1. 填寫登記資料"},{id:1,img:clock,text:"2. 等待審核驗證"},{id:2,img:confirm,text:"3. 確認驗證通過", color:"#ff6621"},{id:3,img:cart,text:"4. 開賣日購買"}];
	return ( <section className="w-[95%] bg-white h-[max-content] flex flex-col items-between md:max-w-[571px] md:h-[145px] md:w-[100%]">
		<div className="mt-[9px] ml-[14px] text-[12px] font-[500] text-[#404259] self-start">活動流程 ：</div>
		<div className="mt-[8px] flex justify-between ml-[9px] mr-[9px]">
			{scheduleList.map((item:ScheduleListProps,index:number)=>(
				<>
					<div className="flex w-[max-content] flex-col" key={item.id}>
						<img src={item.img} className="w-[33px] h-[33px] self-center" alt=""></img>
						<div className={"mt-[3px] text-[8px] font-[500] text-[#404259]"} >{item.text}</div>
					</div>
					{index!==scheduleList.length-1 && (
						<img src={rightArrow} className="w-[12px] h-[12px] self-center mb-[9px]" alt=""></img>
					)}
				</>

			))}
		</div>
	</section>
	);
}

export default Schedule;