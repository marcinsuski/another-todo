import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../src/store/store.tsx";
import TodoList from "../../../src/components/pages/todo_table/index.tsx";
import { TodoListProvider } from "../../../src/store/todoListContext.tsx";

describe("Todo list", () => {
	it("Renders the Todo list table", () => {
		const { getByText } = render(
			<Provider store={store}>
				<TodoListProvider>
					<TodoList />
				</TodoListProvider>
			</Provider>
		);
		const titleElement = getByText(/ostatnie taski/i);
		expect(titleElement).toBeInTheDocument();
	});
});
