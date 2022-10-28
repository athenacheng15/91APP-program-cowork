import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/products/Products";
import Register from "./pages/register/Register";
import Land from "./pages/register/Land";
import Reg from "./pages/register/Reg";
import Selection from "./pages/register/Selection";
import Success from "./pages/register/Success";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Product />} />
				<Route path="register" element={<Register />}>
					<Route index element={<Land />} />
					<Route path="reg" element={<Reg />} />
					<Route path="selection" element={<Selection />} />
					<Route path="success" element={<Success />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
