import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../src/store/store.tsx";

import MainPage from "../../src/components/pages/index.tsx";
import { TodoListProvider } from "../../src/store/todoListContext.tsx";

describe("main page tests", () => {
	it("Renders the main page", () => {
		const { getByText } = render(
			<Provider store={store}>
				<TodoListProvider>
					<MainPage />
				</TodoListProvider>
			</Provider>
		);
		const titleElement = getByText(/filtruj zadania/i);
		expect(titleElement).toBeInTheDocument();
	});
});
