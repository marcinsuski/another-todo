import { Suspense, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainPage from "./components/pages";
import Main from "./components/common/main";
import Header from "./components/common/header";
import LoadingText from "./loading_text";
import { TodoListContext } from "./store/todoListContext";
import { TodoListContextType } from "./types";

declare global {
	interface Window {
		app: TodoListContextType;
	}
}

export default function App() {
	const todoList = useContext(TodoListContext);

	window.app = todoList;

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
