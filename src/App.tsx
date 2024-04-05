import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingText from "./loading_text";
import MainPage from "./components/pages";

export default function App() {
	return (
		<>
			<Suspense fallback={<LoadingText />}>
				<Routes>
					<Route path="*" element={<MainPage />} />
				</Routes>
			</Suspense>
		</>
	);
}
