import { useDispatch } from "react-redux";
import styles from "./item.module.css";
import { completeTodo } from "../../redux/todos-slice";

import Button from "./button";
import Checkbox from "./checkbox";

import type { TodoType } from "../../types";

type ItemProps = {
	todo: TodoType;
	deleteHandler: () => void;
};

export default function Item({ todo, deleteHandler }: ItemProps) {
	const dispatch = useDispatch();
	const { name, id } = todo;
	let { completed } = todo;

	function completedHandler() {
		completed = !completed;
		dispatch(completeTodo({ id, completed }));
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
					mode={"round"}
					className={"deleteTodo"}
					icon={"src/static/delete_red.svg"}
				/>
			</div>
		</div>
	);
}
