import styles from "./button.module.css";
import { BUTTON_TYPES } from "../../constants";

import type { Button } from "../../types";

const buttonStyles = {
	[BUTTON_TYPES.PRIMARY]: styles.primary,
	[BUTTON_TYPES.OUTLINE]: styles.outline,
	[BUTTON_TYPES.ROUND]: styles.round,
	[BUTTON_TYPES.FLAT]: styles.flat,
};

export default function Button({
	dataTestId,
	className,
	disabled = false,
	icon,
	mode = "primary",
	title,
	type = "button",
	onClick,
}: Button) {
	const buttonMode = buttonStyles[mode];
	const passedClassName = styles[`${className}`];
	const classes = [styles.button, buttonMode, passedClassName].join(" ");

	return (
		<div className={styles.button_container}>
			<button
				data-testid={dataTestId ? dataTestId : "my-button"}
				type={type}
				disabled={disabled}
				className={classes}
				onClick={onClick}
			>
				{icon && <img src={icon} alt="" width={20} height={20} />}
				{title && <div>{title}</div>}
			</button>
		</div>
	);
}
