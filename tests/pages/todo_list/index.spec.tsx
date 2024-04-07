import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import TodoList from "../../../src/components/pages/todo_list/index.tsx";

describe("Todo list", () => {
	it("Renders the Todo list table", () => {
		const { getByText } = render(<TodoList />);
		const titleElement = getByText(/ostatnie taski/i);
		expect(titleElement).toBeInTheDocument();
	});
});
