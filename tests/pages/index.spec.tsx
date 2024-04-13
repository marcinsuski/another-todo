import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../../src/redux/store";

import MainPage from "../../src/components/pages/index.tsx";

describe("main page tests", () => {
	it("Renders the main page", () => {
		const { getByText } = render(
			<Provider store={store}>
				<MainPage />
			</Provider>
		);
		const titleElement = getByText(/ostatnie taski/i);
		expect(titleElement).toBeInTheDocument();
	});
});
