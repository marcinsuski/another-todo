import "@testing-library/jest-dom";
import { RenderResult, render } from "@testing-library/react";
import { Provider } from "react-redux";
import TodoReducer from "../../src/store/todos-slice";
import { TodoListProvider } from "../../src/store/todoListContext";

import Table from "../../src/components/common/table";
import Todo from "../../src/classes/Todo";
import { configureStore } from "@reduxjs/toolkit";

describe("Table", () => {
	let getByText: RenderResult["getByText"],
		getByTestId: RenderResult["getByTestId"];

	beforeEach(() => {
		const Todos = [
			new Todo("1", "todo 1", false),
			new Todo("2", "todo 2", true),
			new Todo("3", "todo 3", false),
			new Todo("4", "todo 4", false),
		];

		const mockStore = configureStore({
			reducer: { todos: TodoReducer },
			preloadedState: { todos: { value: Todos } },
		});

		const queries = render(
			<Provider store={mockStore}>
				<TodoListProvider>
					<Table />
				</TodoListProvider>
			</Provider>
		);
		getByText = queries.getByText;
		getByTestId = queries.getByTestId;
	});

	test("renders filters correctly", () => {
		const filterAll = getByTestId("filter-all");
		expect(filterAll).toBeInTheDocument();

		const filterCompleted = getByTestId("filter-completed");
		expect(filterCompleted).toBeInTheDocument();

		const filterActive = getByTestId("filter-active");
		expect(filterActive).toBeInTheDocument();
	});

	test("renders todos correctly", () => {
		const todo1 = getByText("todo 1");
		expect(todo1).toBeInTheDocument();

		const todo2 = getByText("todo 2");
		expect(todo2).toBeInTheDocument();
	});
});
