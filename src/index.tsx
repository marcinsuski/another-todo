import { Suspense, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { TodoListContext } from "./store/todoListContext";
import "./index.css";

import MainPage from "./components/pages";
import Header from "./components/common/header";
import Main from "./components/common/main";
import LoadingText from "./loading_text";

export default function App() {
	const { todoList } = useContext(TodoListContext);

	useEffect(() => {
		// @ts-expect-error Attach todoList to window for debugging
		window.todoList = todoList;
	}, [todoList]);

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
