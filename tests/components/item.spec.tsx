import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Item from "../../src/components/common/item";

describe("Item component", () => {
	const todo = {
		id: 1,
		name: "Test Todo",
		completed: true,
	};

	test("renders the todo name", () => {
		render(<Item todo={todo} />);

		const name = screen.getByText(todo.name);
		expect(name).toBeInTheDocument();
	});

	test("renders the checkbox", () => {
		render(<Item todo={todo} />);
		const checkbox = screen.getByTestId("checkbox");
		expect(checkbox).toBeInTheDocument();
	});

	test("renders the delete button", () => {
		render(<Item todo={todo} />);
		const deleteBtn = screen.getByTestId("my-button");
		expect(deleteBtn).toBeInTheDocument();
	});
});
