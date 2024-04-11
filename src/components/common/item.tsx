import styles from "./item.module.css";

import Button from "./button";
import Checkbox from "./checkbox";

import type { TodoType } from "types";

type ItemProps = {
	todo: TodoType;
};

export default function Item({ todo }: ItemProps) {
	const { name, completed } = todo;
	return (
		<div className={styles.item}>
			<div className={styles.item__status}>
				<Checkbox checked={completed} />
			</div>
			<div data-testid="todo-name" className={styles.item__name}>
				{name}
			</div>
			<div className={styles.item__controls}>
				<Button
					data-testid="delete-btn"
					mode={"round"}
					className={"deleteTodo"}
					icon={"src/static/delete_red.svg"}
				/>
			</div>
		</div>
	);
}
