import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import MainPage from "../../src/components/pages/index.tsx";

describe("main page tests", () => {
	it("Renders the main page", () => {
		const { getByText } = render(<MainPage />);
		const titleElement = getByText("Another Todo App");
		expect(titleElement).toBeInTheDocument();
	});
});
