import useTodoList from "../../hooks/useTodoList";
import styles from "./item.module.css";

import Button from "./button";
import Checkbox from "./checkbox";

import type { TodoType } from "../../types";

type ItemProps = {
	todo: TodoType;
	deleteHandler: () => void;
};

export default function Item({ todo, deleteHandler }: ItemProps) {
	const todoList = useTodoList();
	const { name, id } = todo;
	let { completed } = todo;

	function completedHandler() {
		completed = !completed;
		todoList.toggleTodo(id);
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
					data-testid="delete-btn"
					mode={"flat"}
					className={"deleteTodo"}
					icon={"src/static/delete_red.svg"}
				/>
			</div>
		</div>
	);
}
