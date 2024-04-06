import styles from "./main.module.css";

type WrapperProps = {
	children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
	return <main className={styles.main}>{children}</main>;
}
