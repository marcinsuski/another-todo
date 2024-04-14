import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import AddTodoContent from "../../../../src/components/pages/todo_table/add/add-todo";
import Modal from "../../../../src/components/common/modal";
import { TodoListProvider } from "../../../../src/store/todoListContext";
import { store } from "../../../../src/store/store";
import { act } from "react-dom/test-utils";

jest.mock("../../../../src/hooks/useTodoList", () => ({
	__esModule: true,
	default: () => ({
		addTodo: jest.fn(),
		todos: [],
	}),
}));

describe("AddTodoContent component", () => {
	let onDismissMock = jest.fn();
	global.alert = jest.fn();
	beforeEach(() => {
		onDismissMock = jest.fn();
	});

	it("should properly call the dismiss function when close button is clicked", () => {
		const { getByTestId } = render(
			<Modal
				isOpen={true}
				onDismiss={() => onDismissMock()}
				content={AddTodoContent}
			/>
		);
		fireEvent.click(getByTestId("close-button"));
		expect(onDismissMock).toHaveBeenCalled();
	});

	it("should not call addTodo when form is submitted with empty input", () => {
		const { getByTestId } = render(
			<AddTodoContent onDismiss={onDismissMock} />
		);
		fireEvent.click(getByTestId("submit-button"));
		expect(global.alert).toHaveBeenCalled();
	});

	it("should call addTodo when form is submitted with filled input", async () => {
		const { getByTestId, getByPlaceholderText } = render(
			<Provider store={store}>
				<TodoListProvider>
					<AddTodoContent onDismiss={onDismissMock} />
				</TodoListProvider>
			</Provider>
		);
		const input = getByPlaceholderText("Dodaj zadanie") as HTMLInputElement;
		await act(async () => {
			fireEvent.change(input, { target: { value: "Test task" } });
			fireEvent.click(getByTestId("submit-button"));
		});
		expect(input).toHaveValue("");
	});
});
