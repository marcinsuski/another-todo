import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import Checkbox from "../../src/components/common/checkbox";

describe("Checkbox", () => {
	const todo = {
		id: "1",
		name: "Test Todo",
		completed: false,
	};
	const onChange = jest.fn(() => (todo.completed = !todo.completed));

	it("renders correctly", () => {
		render(<Checkbox checked={todo.completed} onChange={onChange} />);
		const checkbox = screen.getByTestId("checkbox") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
	});

	it("calls the onChange prop when clicked", () => {
		const { getByTestId } = render(
			<Checkbox onChange={onChange} checked={!todo.completed} />
		);
		fireEvent.click(getByTestId("checkbox"));
		expect(onChange).toHaveBeenCalled();
	});

	it("checks and unchecks", () => {
		const { getByTestId } = render(
			<Checkbox onChange={onChange} checked={todo.completed} />
		);
		const checkbox = getByTestId("checkbox") as HTMLInputElement;

		expect(checkbox.checked).toEqual(todo.completed);

		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(!todo.completed);

		fireEvent.click(checkbox);
		expect(checkbox.checked).toEqual(todo.completed);
	});
});
