import { ITodoStore, TodoListState } from "types";
import TodoStore from "../../src/classes/TodoStore";

describe("TodoStore", () => {
	let store: ITodoStore;
	let initialState: TodoListState;

	beforeEach(() => {
		initialState = {
			todos: [],
		};

		store = new TodoStore(initialState);
	});

	it("should be able to get state", () => {
		expect(store.getState()).toEqual(initialState);
	});

	it("should be able to set state", () => {
		const newState: TodoListState = {
			todos: [{ id: "1", name: "Test Todo", completed: false }],
		};

		store.setState(newState);

		expect(store.getState()).toEqual(newState);
	});
});
