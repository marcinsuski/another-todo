import styles from "./table.module.css";
import Item from "./item";

export default function Table() {
	return (
		<div className={styles.table}>
			<div className={styles.table__head}>
				<h3>Ostatnie taski</h3>
				<div className={styles.tableHead}>Taski: 25</div>
			</div>
			<div className={styles.table__body}>
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	);
}
