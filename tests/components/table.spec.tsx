import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../src/store/store";

import Table from "../../src/components/common/table";
import { TodoListProvider } from "../../src/store/todoListContext";

describe("Table", () => {
	test("renders Table correctly", () => {
		const { getByText } = render(
			<Provider store={store}>
				<TodoListProvider>
					<Table />
				</TodoListProvider>
			</Provider>
		);
		const tableHead = getByText(/ostatnie taski/i);
		expect(tableHead).toBeInTheDocument();
	});

	test("renders tasks correctly", () => {
		const { getByText } = render(
			<Provider store={store}>
				<TodoListProvider>
					<Table />
				</TodoListProvider>
			</Provider>
		);
		const tasks = getByText("Taski:");
		expect(tasks).toBeInTheDocument();
	});
});
