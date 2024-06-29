import styles from "./wrapper.module.css";

type WrapperProps = {
	children: React.ReactNode;
	width?: number;
};

export default function Wrapper({ children, width = 100 }: WrapperProps) {
	return (
		<div className={styles.wrapper} style={{ width: width + "%" }}>
			{children}
		</div>
	);
}
