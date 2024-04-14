import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import useTodoList from "../../hooks/useTodoList";

import styles from "./table.module.css";

import Item from "./item";

import Todo from "../../classes/Todo";

export default function Table() {
	const todoList = useTodoList();
	const Todos = useSelector<RootState, Todo[]>((state) => state.todos.value);

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
					Todos.map((todo: Todo, index) => (
						<Item
							key={index}
							todo={todo}
							deleteHandler={() => todoList.deleteTodo(todo.getId())}
						/>
					))}
			</div>
		</div>
	);
}
