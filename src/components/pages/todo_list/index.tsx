import Table from "../../common/table";
import Button from "../../common/button";

export default function TodoList() {
	return (
		<>
			<Table />

			<Button
				mode="round"
				className={"addTodo"}
				title=""
				icon={"src/static/add_white.svg"}
			/>
		</>
	);
}
