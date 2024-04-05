import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("main page tests", () => {
	it("Renders the main page", () => {
		const { getByText } = render(<App />);
		const titleElement = getByText("Another ToDo App");
		expect(titleElement).toBeInTheDocument();
	});
});
