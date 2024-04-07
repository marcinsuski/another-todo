import styles from "./table.module.css";
import Item from "./item";
import Todos from "../../utils/todos";

export default function Table() {
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
				{Todos && Todos.map((todo) => <Item key={todo.id} todo={todo} />)}
			</div>
		</div>
	);
}
