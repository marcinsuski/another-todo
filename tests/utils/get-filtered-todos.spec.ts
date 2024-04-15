import getFilteredTodos from "../../src/utils/get-filtered-todos";
import Todo from "../../src/classes/Todo";
import { FILTERED_TODOS } from "../../src/constants";

describe("getFilteredTodos", () => {
	const mockTodos = [
		new Todo("1", "Task 1", true),
		new Todo("2", "Task 2", false),
		new Todo("3", "Task 3", true),
		new Todo("4", "Task 4", false),
		new Todo("5", "Task 5", false),
	];

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
