import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../src/redux/store";

import Table from "../../src/components/common/table";

describe("Table", () => {
	test("renders Table correctly", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Table />
			</Provider>
		);
		const tableHead = getByText(/ostatnie taski/i);
		expect(tableHead).toBeInTheDocument();
	});

	test("renders tasks correctly", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Table />
			</Provider>
		);
		const tasks = getByText("Taski:");
		expect(tasks).toBeInTheDocument();
	});
});
