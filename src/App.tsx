import { CssVarsProvider } from "@mui/joy";
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Algorithm from "./pages/Algorithm/Algorithm";
import Home from "./pages/Home/Home";

import "./theme/Theme.css";
import { AppTheme } from './theme/MUI_Theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<CssVarsProvider theme={AppTheme}>
		<ToastContainer></ToastContainer>
		<Router>

			<Header></Header>


			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/algorithm" element={<Algorithm />} />

			</Routes>
		</Router>
		</CssVarsProvider>
	);
}

