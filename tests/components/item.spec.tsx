import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../src/store/store";

import Item from "../../src/components/common/item";
import { TodoListProvider } from "../../src/store/todoListContext";
import Todo from "../../src/classes/Todo";

describe("Item component", () => {
	const todo = new Todo("1", "Test Todo", false);
	const deleteHandler = jest.fn();
	test("renders the todo name", () => {
		render(
			<Provider store={store}>
				<TodoListProvider>
					<Item todo={todo} deleteHandler={deleteHandler} />
				</TodoListProvider>
			</Provider>
		);

		const name = screen.getByText(todo.name);
		expect(name).toBeInTheDocument();
	});

	test("renders the checkbox", () => {
		render(
			<Provider store={store}>
				<TodoListProvider>
					<Item todo={todo} deleteHandler={deleteHandler} />
				</TodoListProvider>
			</Provider>
		);
		const checkbox = screen.getByTestId("checkbox");
		expect(checkbox).toBeInTheDocument();
	});

	test("renders the delete button", () => {
		render(
			<Provider store={store}>
				<TodoListProvider>
					<Item todo={todo} deleteHandler={deleteHandler} />
				</TodoListProvider>
			</Provider>
		);
		const deleteBtn = screen.getByTestId("delete-btn");
		expect(deleteBtn).toBeInTheDocument();
	});
});
