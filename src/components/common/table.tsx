import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { deleteTodo } from "../../redux/todos-slice";

import styles from "./table.module.css";

import Item from "./item";

import { TodoType } from "../../types";

export default function Table() {
	const dispatch = useDispatch();
	const Todos = useSelector<RootState, TodoType[]>(
		(state) => state.todos.value
	);

	useEffect(() => {
		Todos && localStorage.setItem("todos", JSON.stringify(Todos));
	}, [Todos]);

	return (
		<div className={styles.table}>
			<div className={styles.table__head}>
				<h3>Ostatnie taski</h3>
				<div className={styles.tableHead}>
					Taski:{" "}
					<span data-testid="todos-number">{Todos ? Todos.length : "0"}</span>
				</div>
			</div>
			<div className={styles.table__body}>
				{Todos &&
					Todos.map((todo) => (
						<Item
							key={todo.id}
							todo={todo}
							deleteHandler={() => dispatch(deleteTodo({ id: todo.id }))}
						/>
					))}
			</div>
		</div>
	);
}
