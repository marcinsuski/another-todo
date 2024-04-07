import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Button from "../../src/components/common/button";

describe("Button", () => {
	test("renders button with title", () => {
		const { getByText } = render(<Button title="My Button" />);
		const button = getByText(/my button/i);
		expect(button).toBeInTheDocument();
	});

	test("handles click events", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button title="My Button" onClick={handleClick} />
		);
		fireEvent.click(getByText(/my button/i));
		expect(handleClick).toHaveBeenCalled();
	});
});
