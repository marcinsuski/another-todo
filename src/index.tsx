import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import MainPage from "./components/pages";
import Header from "./components/common/header";
import Main from "./components/common/main";

import LoadingText from "./loading_text";
export default function App() {
	return (
		<>
			<Header />
			<Main>
				<Suspense fallback={<LoadingText />}>
					<Routes>
						<Route path="*" element={<MainPage />} />
					</Routes>
				</Suspense>
			</Main>
		</>
	);
}
