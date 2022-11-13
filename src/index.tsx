import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/products/Products";
import Register from "./pages/register/Register";
import Reg from "./pages/register/Reg/Reg";
import LandingWrapper from "./pages/register/Landing/LandingWrapper";
import SelectionWrapper from "./pages/register/Selection/SelectionWrapper";
import SuccessWrapper from "./pages/register/Success/SuccessWrapper";

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
					<Route index element={<LandingWrapper />} />
					{/* default page when path is /register */}
					<Route path="form" element={<Reg />} />
					<Route path="selection" element={<SelectionWrapper />} />
					<Route path="success" element={<SuccessWrapper />} />
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
