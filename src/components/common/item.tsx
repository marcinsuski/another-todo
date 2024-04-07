import styles from "./item.module.css";

import Button from "./button";

export default function Item() {
	return (
		<div className={styles.item}>
			<div className={styles.item__status}>sd</div>
			<div className={styles.item__name}>test</div>
			<div className={styles.item__controls}>
				<Button
					mode={"round"}
					className={"deleteTodo"}
					icon={"src/static/delete_red.svg"}
				/>
			</div>
		</div>
	);
}
