import "@testing-library/jest-dom";
import { RenderResult, fireEvent, render } from "@testing-library/react";
import { TodoListContext } from "../../src/store/todoListContext";

import TodoStore from "../../src/classes/TodoStore";
import Table from "../../src/components/common/table";

describe("Table", () => {
	let getByText: RenderResult["getByText"],
		getByTestId: RenderResult["getByTestId"];

	beforeEach(() => {
		const todos = [
			{ id: "1", name: "todo 1", completed: false },
			{ id: "2", name: "todo 2", completed: true },
		];

		const mockFunctions = {
			todos: todos,
			store: new TodoStore({ todos: [] }),
			getTodos: jest.fn(),
			setTodos: jest.fn(),
			addTodo: jest.fn(),
			deleteTodo: jest.fn(),
			deleteAllTodos: jest.fn(),
			deleteCompletedTodos: jest.fn(),
			toggleTodo: jest.fn(),
		};

		const queries = render(
			<TodoListContext.Provider value={mockFunctions}>
				<Table />
			</TodoListContext.Provider>
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
		expect(getByTestId("todos-number")).toHaveTextContent("2 / 2");
		expect(getByText("todo 1")).toBeInTheDocument();
		expect(getByText("todo 2")).toBeInTheDocument();
	});

	test("filter buttons functionality", () => {
		const filterAllButton = getByTestId("filter-all");
		fireEvent.click(filterAllButton);

		const filterCompletedButton = getByTestId("filter-completed");
		fireEvent.click(filterCompletedButton);

		const filterActiveButton = getByTestId("filter-active");
		fireEvent.click(filterActiveButton);
	});
});
