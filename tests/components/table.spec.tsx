import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Table from "../../src/components/common/table";

describe("Table", () => {
	test("renders Table correctly", () => {
		const { getByText } = render(<Table />);
		const tableHead = getByText(/ostatnie taski/i);
		expect(tableHead).toBeInTheDocument();
	});
	test("renders tasks correctly", () => {
		const { getByText } = render(<Table />);
		const tasks = getByText(/taski: /i);
		expect(tasks).toBeInTheDocument();
	});
});
