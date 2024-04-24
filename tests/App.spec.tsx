import "@testing-library/jest-dom";
import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../src";
import TodoListProvider from "../src/store/todoListContext";

export function renderWithRouter(ui: ReactNode, { route = "/" } = {}) {
	return {
		...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
	};
}

describe("Router", () => {
	test("renders default route", () => {
		const { getByText } = renderWithRouter(
			<TodoListProvider>
				<App />
			</TodoListProvider>,
			{ route: "/" }
		);
		const titleElement = getByText(/another todo app/i);
		expect(titleElement).toBeInTheDocument();
	});
});
