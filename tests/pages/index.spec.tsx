import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import MainPage from "../../src/components/pages/index.tsx";
import TodoListProvider from "../../src/store/todoListContext.tsx";

describe("main page tests", () => {
	it("Renders the main page", () => {
		const { getByText } = render(
			<TodoListProvider>
				<MainPage />
			</TodoListProvider>
		);
		const titleElement = getByText(/filtruj zadania/i);
		expect(titleElement).toBeInTheDocument();
	});
});
