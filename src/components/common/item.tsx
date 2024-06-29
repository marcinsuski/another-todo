import { useContext } from "react";
import styles from "./item.module.css";

import Button from "./button";
import Checkbox from "./checkbox";
import { Todo } from "../../types";
import { TodoListContext } from "../../store/todoListContext";
type ItemProps = {
	todo: Todo;
	deleteHandler: () => void;
};

export default function Item({ todo, deleteHandler }: ItemProps) {
	const { name } = todo;
	let { completed } = todo;
	const { toggleCompleted } = useContext(TodoListContext);

	function completedHandler() {
		completed = !completed;
		toggleCompleted(todo.id);
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
