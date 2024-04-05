import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../src/App";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(ui: ReactNode, { route = "/" } = {}) {
	return {
		...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
	};
}

describe("Test router", () => {
	test("renders default route", () => {
		const { getByText } = renderWithRouter(<App />, { route: "/" });
		const titleElement = getByText("Another Todo App");
		expect(titleElement).toBeInTheDocument();
	});
});
