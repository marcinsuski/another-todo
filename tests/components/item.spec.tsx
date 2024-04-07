import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Item from "../../src/components/common/item";

describe("Button", () => {
	test("renders individual item", () => {
		const { getByText } = render(<Item />);
		const item = getByText(/test/i);
		expect(item).toBeInTheDocument();
	});
});
