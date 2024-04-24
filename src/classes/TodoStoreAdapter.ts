import { TodoListState, ITodoStore } from "../types";
import Cache from "./Cache";

export default class TodoStore implements ITodoStore {
	#store: TodoListState;

	constructor(store: TodoListState) {
		const cache = new Cache();
		this.#store = cache.getState() || store;
	}
	getState(): TodoListState {
		return this.#store;
	}

	setState(newState: TodoListState): void {
		this.#store = newState;
		localStorage.setItem("todos", JSON.stringify(this.#store));
	}
}
