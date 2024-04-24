import getFilteredTodos from "../../src/utils/get-filtered-todos";
import { FILTERED_TODOS } from "../../src/constants";
import Todos from "../../src/utils/mockTodos";

describe("getFilteredTodos", () => {
	const mockTodos = Todos;

	test('returns all todos when filter is set to "all"', () => {
		expect(getFilteredTodos(mockTodos, FILTERED_TODOS.ALL)).toEqual(mockTodos);
	});

	test('returns only active todos when filter is set to "active"', () => {
		const activeTodos = mockTodos.filter((todo) => !todo.completed);
		expect(getFilteredTodos(mockTodos, FILTERED_TODOS.ACTIVE)).toEqual(
			activeTodos
		);
	});

	test('returns only completed todos when filter is set to "completed"', () => {
		const completedTodos = mockTodos.filter((todo) => todo.completed);
		expect(getFilteredTodos(mockTodos, FILTERED_TODOS.COMPLETED)).toEqual(
			completedTodos
		);
	});

	test("returns all todos when filter is invalid", () => {
		expect(getFilteredTodos(mockTodos, "invalid")).toEqual(mockTodos);
	});
});
