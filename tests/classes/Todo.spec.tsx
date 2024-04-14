import Todo from "../../src/classes/Todo";

describe("Todo", () => {
	it("should create a new Todo instance", () => {
		const todo = new Todo("1", "Test Todo", false);
		expect(todo).toBeInstanceOf(Todo);
		expect(todo.id).toBe("1");
		expect(todo.name).toBe("Test Todo");
		expect(todo.completed).toBe(false);
	});

	it("should return the id of the Todo", () => {
		const todo = new Todo("1", "Test Todo", false);
		expect(todo.getId()).toBe("1");
	});
});
