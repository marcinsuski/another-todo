import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../src";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export function renderWithRouter(ui: ReactNode, { route = "/" } = {}) {
	return {
		...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
	};
}

describe("Router", () => {
	test("renders default route", () => {
		const { getByText } = renderWithRouter(<App />, { route: "/" });
		const titleElement = getByText(/another todo app/i);
		expect(titleElement).toBeInTheDocument();
	});
});
