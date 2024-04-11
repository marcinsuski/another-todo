import { ChangeEvent } from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = {
	checked: boolean;
	className?: string;
	name?: string;
	title?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
	checked,
	className,
	name,
	title,
	onChange,
}: CheckboxProps) {
	const classes = [
		styles.checkbox,
		checked ? styles.completed : "",
		className,
	].join(" ");

	return (
		<div className={styles.wrapper}>
			{title}
			<label className={styles.container}>
				<input
					data-testid="checkbox"
					type="checkbox"
					name={name}
					checked={checked}
					className={classes}
					onChange={onChange}
				/>
				<span className={styles.checkmark}></span>
			</label>
		</div>
	);
}
