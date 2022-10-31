import InputTitle from "./InputTitle";
import ValidationWarning from "./ValidationWarning";
import { useContext, useEffect, useState } from "react";
import {UserContext} from "../../../utili/useContext";


function InputForm() {

	const { regInfo, setRegInfo, proPostInfo, setProPostInfo } = useContext(UserContext);
	useEffect(()=>console.log(proPostInfo),[proPostInfo]);
	

	return ( <section className="w-[100%] bg-white h-[max-content] flex flex-col">
		<div className="flex flex-col">
			<InputTitle text={"姓名"} />
			<input 
				onChange={(e)=>{
					setProPostInfo({...proPostInfo,name:e.target.value});
				}}
				placeholder="輸入中文姓名，限制 2~7 個字" className={`${regInfo.name==="WRONG" ? "border-[#fe494e]" :"border-[#dddddd]" } p-[10px] w-[90%] self-center rounded-md h-[40px] border-solid border-[1px]`}></input>
			{regInfo.name==="WRONG"&&(
				<ValidationWarning text={"請輸入中文姓名，限制2~7個字"} />
			)}
			<InputTitle text={"手機號碼 (限手機10碼，同一支號碼不可重複）"} />
			<div className="w-[90%] self-center flex">
				<select className="mr-[5px] w-[116px] h-[40px] bg-[#f4f4f4] rounded-md border-solid border-[1px] border-[#dddddd] pl-[8px] pb-[2px]">
					<option value="+886" className="mt-[30px] absolute top-[20%]" selected>+886</option>
				</select>
				<div className="w-[calc(100%-116px)] flex flex-col h-[max-content]">
					<input 
						onChange={(e)=>{
							setProPostInfo({...proPostInfo,phone:e.target.value});
						}}
						maxLength={10}
						placeholder="輸入手機號碼" className={`${regInfo.phone==="WRONG" ? "border-[#fe494e]" :"border-[#dddddd]" } w-[100%] p-[10px] self-center rounded-md h-[40px] border-solid border-[1px] mb-[5px]></input>`}></input>
					{regInfo.phone==="WRONG"&&(
						<ValidationWarning text={"手機號碼格式錯誤，請重新輸入"} />
					)}
				</div>
				
			</div>
			<div className="mt-[4p] h-[max-content] p-[12px] w-[90%] self-center bg-[#fffce6] flex items-center justify-center">
				<span className="text-[13px]">*登記手機號碼需與會員手機號碼相同，每人限登記乙支，此為預約聯繫憑證，您必須確認留存之資料均完整並正確，且確保手機可正常收發簡訊。</span>
			</div>
			<InputTitle text={"Email 信箱  (開賣日用此Email通知付款)"} />
			<input 
				onChange={(e)=>{
					setProPostInfo({...proPostInfo,email:e.target.value});
				}}
				placeholder="輸入 Email" className={`${regInfo.email==="WRONG" ? "border-[#fe494e]" :"border-[#dddddd]"} p-[10px] w-[90%] self-center rounded-md h-[40px] border-solid border-[1px]`}></input>
			{regInfo.email==="WRONG"&&(<ValidationWarning text={"Email 格式錯誤，請重新輸入"} />)}
			<div className="flex mt-[20px] w-[90%] self-center items-center">
				<input 
					onChange={(e)=>{
						setProPostInfo({...proPostInfo,checked:e.target.checked});
					}}
					type="checkbox" className="h-[16px] w-[16px] mr-[5px]"></input>
				<div className="text-[14px]">我已經閱讀並同意<a href="" className="text-[13px] text-[#3d81bf] hover:underline">隱私權及網站使用條款 </a></div>
			</div>
			<ValidationWarning text={"請確認同意隱私權及網站使用條款"} />
			<div className="mt-[15px] mb-[15px] w-[100%] h-[1px] bg-[#e9e9e9]"></div>
		</div>
	</section> );
}

export default InputForm;