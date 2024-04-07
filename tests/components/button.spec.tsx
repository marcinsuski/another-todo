import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../../src/components/common/button";
import styles from "../../src/components/common/button.module.css";

describe("Button", () => {
	test("renders button with title", () => {
		const { getByText } = render(<Button title="My Button" />);
		const button = getByText(/my button/i);
		expect(button).toBeInTheDocument();
	});

	test("renders button with style", () => {
		const className = styles.round;
		render(<Button title="My Button" mode={"round"} />);
		const button = screen.getByTestId("my-button");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(className);
	});
	test("renders button with icon", () => {
		render(<Button icon={"src/static/add_white.svg"} />);
		const buttonIcon = screen.getByRole("img");
		expect(buttonIcon).toBeInTheDocument();
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
