import useTodoList from "../../hooks/useTodoList";
import styles from "./item.module.css";

import Button from "./button";
import Checkbox from "./checkbox";

import Todo from "classes/Todo";

type ItemProps = {
	todo: Todo;
	deleteHandler: () => void;
};

export default function Item({ todo, deleteHandler }: ItemProps) {
	const todoList = useTodoList();
	const { name } = todo;
	let { completed } = todo;

	function completedHandler() {
		completed = !completed;
		todoList.toggleTodo(todo.getId());
	}

	return (
		<div className={styles.item}>
			<div className={styles.item__status}>
				<Checkbox checked={completed} onChange={completedHandler} />
			</div>
			<div data-testid="todo-name" className={styles.item__name}>
				{name}
			</div>
			<div className={styles.item__controls}>
				<Button
					onClick={deleteHandler}
					dataTestId="delete-btn"
					mode={"flat"}
					className={"deleteTodo"}
					icon={"/delete_red.svg"}
				/>
			</div>
		</div>
	);
}
