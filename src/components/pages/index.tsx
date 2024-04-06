import styles from "./index.module.css";
import Wrapper from "../../components/common/wrapper";
import TodoList from "./todo_list";

export default function MainPage() {
	return (
		<Wrapper width={70}>
			<div className={styles.center}>Recent todos</div>
			<div className={styles.tableHead}>Tasks: 25</div>
			<TodoList />
		</Wrapper>
	);
}
