function RegRule() {

	const listItem=["預約活動方法及聲明：於指定活動網頁登記預約資料，後續透過簡訊及email依照登記順序通知購買。限量預約，預約登記額滿為止。","預約購買辦法：預約人需於9/24 8:00依預約登記順序提供專屬購買。","預約登記僅擁有優先購買資格，不代表訂購完成，訂單成立且成功付款後，方為完成訂購程序。"];

	return ( <section className="w-[100%] min-h-[722px] bg-white flex flex-col items-center">
		<div className="w-[84%] mt-[20px] mb-[16px] flex flex-col">
			<ol className="list-decimal text-[10px] "><span className="font-[700] text-[#666666]">預約活動說明：</span>
				<li className="text-[#666666] font-[300] leading-[23px]">預約登記日期：即日起至 <span className="text-[#FF5353]">2021/9/23(四)23:59 </span>為止。</li>
				{listItem.map((item:any)=>(
					<li key={item} className="text-[#666666] font-[300] leading-[23px]">{item}</li>
				))}
				<li className="text-[#666666] font-[300] leading-[23px]">個人資料保護法告知事項<br />當您透過本活動網站輸入個人資料參與活動時表示已同意『蒐集個人資料告知事項與同意書』內容。<br />- 個人資料項目：姓名、手機號碼、電子信箱<br />- 個人資料利用之地區、對象及方式：<br /><div className="ml-[10px]">-地區：台灣地區。<br />-對象：參與活動之客戶<br />-方式：書面、電子文件、電話、以自動化機器或其他非自動化等方式利用。</div></li>
				<li className="text-[#666666] font-[300] leading-[23px]">台端依據個資法第三條規定得行使之權利及方式：<br /> 1.資料使用期間，權利人得隨時向本公司請求查詢、閱覽、製給複製    副本；或補充/更正、請求停止蒐集、處理、利用或刪除其所提供之個人資料內容一部或全部。<br />2.台端得自由選擇是否提供相關個人資料，惟若拒絕提供相關個人資    料者，將無法參加本活動或視為放棄預約登記資格。經檢舉或本公    司發現不足以確認本活動參與者的身分真實性或其他個人資料冒    用、盜用、資料不實等情形，致本公司無法進行必要之確認作業，    本公司有暫停停止提供本活動相關服務並取消預約登記資格，如有    不便之處敬請見諒。</li>
				
			</ol>

		</div>
	</section> );
}

export default RegRule;