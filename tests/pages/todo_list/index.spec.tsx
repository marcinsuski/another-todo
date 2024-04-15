import "@testing-library/jest-dom";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../src/store/store.tsx";
import TodoTable from "../../../src/components/pages/todo_table/index.tsx";
import { TodoListProvider } from "../../../src/store/todoListContext.tsx";

describe("Todo list", () => {
	let getByText: RenderResult["getByText"],
		getByTestId: RenderResult["getByTestId"];

	jest.mock("../../../src/hooks/useTodoList", () => ({
		__esModule: true,
		default: () => ({
			deleteAllTodos: jest.fn(),
			todos: [],
		}),
	}));

	global.alert = jest.fn();
	beforeEach(() => {
		const queries = render(
			<Provider store={store}>
				<TodoListProvider>
					<TodoTable />
				</TodoListProvider>
			</Provider>
		);
		getByText = queries.getByText;
		getByTestId = queries.getByTestId;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders the Todo list table", () => {
		const titleElement = getByText(/ostatnie taski/i);
		expect(titleElement).toBeInTheDocument();
	});

	it("opens the modal when the 'Add task' button is clicked", () => {
		fireEvent.click(getByText("Dodaj zadanie"));
		expect(getByText(/wprowadź nazwę zadania/i)).toBeInTheDocument();
	});

	it("dismisses the modal correctly", () => {
		fireEvent.click(getByText("Dodaj zadanie"));
		const dialog = getByText(/wprowadź nazwę zadania/i);
		const closeButton = getByTestId("close-button");
		fireEvent.click(closeButton);
		expect(dialog).not.toBeInTheDocument();
	});
});
