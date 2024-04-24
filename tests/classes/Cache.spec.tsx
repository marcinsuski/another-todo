import Cache from "../../src/classes/Cache";
import { ITodoStore, TodoListState } from "types";

describe("Cache", () => {
	let cache: ITodoStore;
	let todos: TodoListState;

	beforeEach(() => {
		cache = new Cache();

		todos = {
			todos: [
				{ id: "1", name: "todo1", completed: false },
				{ id: "2", name: "todo2", completed: false },
			],
		};

		localStorage.clear();
	});

	it("should return null when there is no data in localStorage", () => {
		expect(cache.getState()).toBeNull();
	});

	it("should save state to localStorage", () => {
		cache.setState(todos);
		expect(JSON.parse(localStorage.getItem("todos") as string)).toEqual(todos);
	});

	it("should get state from localStorage", () => {
		localStorage.setItem("todos", JSON.stringify(todos));
		expect(cache.getState()).toEqual(todos);
	});
});
