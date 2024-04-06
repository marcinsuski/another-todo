import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../../src/components/common/header.tsx";
import formatDate from "../../src/utils/format-date";

jest.mock("../../src/utils/format-date");

describe("Header component", () => {
	it("renders the Header correctly", () => {
		const { getByText } = render(<Header />);
		const titleElement = getByText(/another todo app/i);
		expect(titleElement).toBeInTheDocument();
	});
	it("renders the current date correctly", () => {
		const mockDate = "02 kwietnia 2024";
		(formatDate as jest.Mock).mockReturnValue(mockDate);

		const { getByText } = render(<Header />);
		expect(getByText(mockDate)).toBeInTheDocument();
	});
});
