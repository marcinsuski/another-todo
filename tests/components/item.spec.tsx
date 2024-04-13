import "@testing-library/jest-dom";
import { Provider } from "react-redux";

import { render, screen } from "@testing-library/react";

import { store } from "../../src/redux/store";
import Item from "../../src/components/common/item";

describe("Item component", () => {
	const todo = {
		id: "1",
		name: "Test Todo",
		completed: false,
	};
	const deleteHandler = jest.fn();
	test("renders the todo name", () => {
		render(
			<Provider store={store}>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</Provider>
		);

		const name = screen.getByText(todo.name);
		expect(name).toBeInTheDocument();
	});

	test("renders the checkbox", () => {
		render(
			<Provider store={store}>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</Provider>
		);
		const checkbox = screen.getByTestId("checkbox");
		expect(checkbox).toBeInTheDocument();
	});

	test("renders the delete button", () => {
		render(
			<Provider store={store}>
				<Item todo={todo} deleteHandler={deleteHandler} />
			</Provider>
		);
		const deleteBtn = screen.getByTestId("my-button");
		expect(deleteBtn).toBeInTheDocument();
	});
});
