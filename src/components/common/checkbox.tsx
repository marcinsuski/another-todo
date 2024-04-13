import { ChangeEvent } from "react";
import styles from "./checkbox.module.css";

type CheckboxProps = {
	checked: boolean;
	className?: string;
	name?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
	checked,
	className,
	name,
	onChange,
}: CheckboxProps) {
	const classes = [
		styles.checkbox,
		checked ? styles.completed : "",
		className,
	].join(" ");

	return (
		<div className={styles.wrapper}>
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
