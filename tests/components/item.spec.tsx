import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Item from "../../src/components/common/item";
import TodoListProvider from "../../src/store/todoListContext";

describe("Item component", () => {
	const todo = { id: "1", name: "Test Todo", completed: false };
	const deleteHandler = jest.fn();
	test("renders the todo name", () => {
		render(
			<TodoListProvider>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</TodoListProvider>
		);

		const name = screen.getByText(todo.name);
		expect(name).toBeInTheDocument();
	});

	test("renders the checkbox", () => {
		render(
			<TodoListProvider>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</TodoListProvider>
		);
		const checkbox = screen.getByTestId("checkbox");
		expect(checkbox).toBeInTheDocument();
	});

	test("renders the delete button", () => {
		render(
			<TodoListProvider>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</TodoListProvider>
		);
		const deleteBtn = screen.getByTestId("delete-btn");
		expect(deleteBtn).toBeInTheDocument();
	});
});
