import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../../src/redux/store";
import TodoList from "../../../src/components/pages/todo_list/index.tsx";

describe("Todo list", () => {
	it("Renders the Todo list table", () => {
		const { getByText } = render(
			<Provider store={store}>
				<TodoList />
			</Provider>
		);
		const titleElement = getByText(/ostatnie taski/i);
		expect(titleElement).toBeInTheDocument();
	});
});
