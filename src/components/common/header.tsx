import styles from "./header.module.css";
import formatdDate from "../../utils/format-date";

const title = "Another ToDo App";

export default function Header() {
	const userLocale = navigator.language;

	return (
		<header className={styles.header}>
			<p className={styles.today}>{formatdDate(new Date(), userLocale)}</p>
			<h1 className={styles.pageTitle}>{title}</h1>
		</header>
	);
}
