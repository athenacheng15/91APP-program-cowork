// export const registerData = [{imgUrl: "", name: "", color: "", size:""}];
import iphone13Catalog from "../img/register/iPhone-images/iPhone13Catalog.png";
import iPhone13ProCatalog from "../img/register/iPhone-images/iPhone13ProCatalog.png";
import iphone13Pink from "../img/register/iPhone-images/iphone-13-pink.png";
import iphone13Blue from "../img/register/iPhone-images/iphone-13-blue.png";
import iphone13Midnight from "../img/register/iPhone-images/iphone-13-midnight.png";
import iphone13Starlight from "../img/register/iPhone-images/iphone-13-starlight.png";
import iphone13Red from "../img/register/iPhone-images/iphone-13-red.png";

export type RegisterDataProps=({
    imgUrl: string;
    name: string;
    color?: undefined;
    type?: undefined;
} | {
    imgUrl: string;
    name: string;
    color: string;
    type: string;
})[]

export const registerData = [{imgUrl: iphone13Catalog, name: "iPhone 13"},{imgUrl: iphone13Pink, name: "iPhone 13 粉紅色",color:"粉紅色",type:"iPhone 13"},{imgUrl: iphone13Blue, name: "iPhone 13 藍色",color:"藍色",type:"iPhone 13"},{imgUrl: iphone13Midnight, name: "iPhone 13 午夜色",color:"午夜色",type:"iPhone 13"},{imgUrl: iphone13Starlight, name: "iPhone 13 星光白",color:"星光白",type:"iPhone 13"},{imgUrl: iphone13Red, name: "iPhone 13 熱情紅",color:"熱情紅",type:"iPhone 13"},{imgUrl: iPhone13ProCatalog, name: "iPhone 13 Pro"}];
// add stock later
export const iPhoneColorList=[{name:"粉紅色",color:"#FAE1DC"},{name:"藍色",color:"#3d6c85"},{name:"午夜色",color:"#3b3f44"},{name:"星光白",color:"#faf6f3"},{name:"玫瑰金",color:"#d8b4b4"},{name:"玫瑰粉",color:"#fea9b9"},{name:"湖水綠",color:"#aad5c2"},{name:"夢幻紫",color:"#c0a6df"},{name:"熱情紅",color:"#b67f80"}];


