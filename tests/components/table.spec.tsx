import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "../../src/components/common/table";
import Todos from "../../src/utils/todos";

describe("Table", () => {
	test("renders Table correctly", () => {
		const { getByText } = render(<Table />);
		const tableHead = getByText(/ostatnie taski/i);
		expect(tableHead).toBeInTheDocument();
	});

	test("renders tasks correctly", () => {
		const { getByText } = render(<Table />);
		const tasks = getByText("Taski:");
		expect(tasks).toBeInTheDocument();
	});

	test("renders tasks number correctly", () => {
		render(<Table />);
		const tasks = screen.getByTestId("todos-number");
		expect(tasks.textContent).toEqual(Todos.length.toString());
	});
});
