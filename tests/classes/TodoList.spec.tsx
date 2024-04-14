import TodoList from "../../src/classes/TodoList";

describe("TodoList", () => {
	let todoList;
	let windowConfirm: jest.SpyInstance;

	beforeEach(() => {
		windowConfirm = jest.spyOn(window, "confirm");
		windowConfirm.mockImplementation(() => true);
		todoList = new TodoList(jest.fn());
		todoList.deleteAllTodos();
	});

	afterEach(() => {
		windowConfirm.mockRestore();
	});

	it("should create a new TodoList instance", () => {
		todoList = new TodoList(jest.fn());
		expect(todoList).toBeInstanceOf(TodoList);
	});

	it("should add a new Todo to the list", () => {
		todoList = new TodoList(jest.fn());
		todoList.addTodo("Test Todo");
		expect(todoList.getTodos().length).toBe(1);
	});

	it("should delete a Todo from the list", () => {
		todoList = new TodoList(jest.fn());
		todoList.addTodo("Test Todo");
		const todo = todoList.getTodos()[0];
		const id = todo.getId();
		todoList.deleteTodo(id);
		expect(todoList.getTodos().length).toBe(0);
	});

	it("should toggle a Todo in the list", () => {
		todoList = new TodoList(jest.fn());
		todoList.addTodo("Test Todo");
		const id = todoList.getTodos()[0].getId();
		todoList.toggleTodo(id);
		expect(todoList.getTodos()[0].completed).toBe(true);
	});
});
