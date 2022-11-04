// export const registerData = [{imgUrl: "", name: "", color: "", size:""}];
import iphone13Catalog from "../img/register/iPhone-images/iPhone13Catalog.png";
import iPhone13ProCatalog from "../img/register/iPhone-images/iPhone13ProCatalog.png";
import iphone13Pink from "../img/register/iPhone-images/iphone-13-pink.png";
import iphone13Blue from "../img/register/iPhone-images/iphone-13-blue.png";
import iphone13Midnight from "../img/register/iPhone-images/iphone-13-midnight.png";
import iphone13Starlight from "../img/register/iPhone-images/iphone-13-starlight.png";
import iphone13Red from "../img/register/iPhone-images/iphone-13-red.png";
import iphone13ProSky from "../img/register/iPhone-images/pro-iphone-13-sky.png";
import iphone13ProGreen from "../img/register/iPhone-images/pro-iphone-13-green.png";
import iphone13ProGold from "../img/register/iPhone-images/pro-iphone-13-gold.png";
import iphone13ProGraphite from "../img/register/iPhone-images/pro-iphone-13-graphite.png";

export type RegisterDataProps = {
	imgUrl: string;
	name: string;
	color?: undefined;
	type?: undefined;
}[];

export const registerData = [
	{ imgUrl: iphone13Catalog, name: "iPhone 13" },
	{
		imgUrl: iphone13Pink,
		name: "iPhone 13 粉紅色",
		color: "粉紅色",
		type: "iPhone 13",
	},
	{
		imgUrl: iphone13Blue,
		name: "iPhone 13 藍色",
		color: "藍色",
		type: "iPhone 13",
	},
	{
		imgUrl: iphone13Midnight,
		name: "iPhone 13 午夜色",
		color: "午夜色",
		type: "iPhone 13",
	},
	{
		imgUrl: iphone13Starlight,
		name: "iPhone 13 星光色",
		color: "星光色",
		type: "iPhone 13",
	},
	{
		imgUrl: iphone13Red,
		name: "iPhone 13 熱情紅",
		color: "熱情紅",
		type: "iPhone 13",
	},
	{ imgUrl: iPhone13ProCatalog, name: "iPhone 13 Pro" },
	{
		imgUrl: iphone13ProSky,
		name: "iPhone 13 Pro 天峰藍",
		color: "天峰藍",
		type: "iPhone 13 Pro",
	},
	{
		imgUrl: iphone13ProGreen,
		name: "iPhone 13 Pro 湖水綠",
		color: "湖水綠",
		type: "iPhone 13 Pro",
	},
	{
		imgUrl: iphone13ProGold,
		name: "iPhone 13 Pro 金色",
		color: "金色",
		type: "iPhone 13 Pro",
	},
	{
		imgUrl: iphone13ProGraphite,
		name: "iPhone 13 Pro 石墨色",
		color: "石墨色",
		type: "iPhone 13 Pro",
	},
];
// add stock later
export const iPhoneColorList = [
	{ name: "粉紅色", color: "#FAE1DC" },
	{ name: "藍色", color: "#3d6c85" },
	{ name: "午夜色", color: "#3b3f44" },
	{ name: "星光色", color: "#faf6f3" },
	{ name: "熱情紅", color: "#b67f80" },
	{ name: "湖水綠", color: "#aad5c2" },
	{ name: "天峰藍", color: "#a6bfd6" },
	{ name: "金色", color: "#f9e7cf" },
	{ name: "石墨色", color: "#585755" },
];
export const priceChart = [
	{ type: "iPhone 13", size: "128GB", price: "25,900" },
	{ type: "iPhone 13", size: "256GB", price: "29,400" },
	{ type: "iPhone 13", size: "512GB", price: "36,400" },
	{ type: "iPhone 13 Pro", size: "128GB", price: "32,900" },
	{ type: "iPhone 13 Pro", size: "256GB", price: "36,400" },
	{ type: "iPhone 13 Pro", size: "512GB", price: "43,400" },
	{ type: "iPhone 13 Pro", size: "1TB", price: "50,400" },
];
export const sizeList = [
	{ name: "128GB" },
	{ name: "256GB" },
	{ name: "512GB" },
	{ name: "1TB" },
];
export const typeList = [{ name: "iPhone 13" }, { name: "iPhone 13 Pro" }];

export const registerCarousellData = [
	{ id: 0, img: iphone13Catalog, fileType: "img" },
	{
		id: 1,
		img: iphone13Pink,
		fileType: "img",
	},
	{
		id: 2,
		img: iphone13Blue,
		fileType: "img",
	},
	{
		id: 3,
		img: iphone13Midnight,
		fileType: "img",
	},
	{
		id: 4,
		img: iphone13Starlight,
		fileType: "img",
	},
	{
		id: 5,
		img: iphone13Red,
		fileType: "img",
	},
	{ id: 6, img: iPhone13ProCatalog, fileType: "img" },
	{
		id: 7,
		img: iphone13ProSky,
		fileType: "img",
	},
	{
		id: 8,
		img: iphone13ProGreen,
		fileType: "img",
	},
	{
		id: 9,
		img: iphone13ProGold,
		fileType: "img",
	},
	{
		id: 10,
		img: iphone13ProGraphite,
		fileType: "img",
	},
];
