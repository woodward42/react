import styles from "./main.module.css";

export function MainTemplate({ header, chats, children }) {
	return (
		<>
			<div className={styles.header}>{header}</div>
			<div className={styles.app}>
				<div className={styles.grid_wrapper}>
                    <div className={styles.chats_list}>{chats}</div>
                    <div className={styles.messages_list}>{children}</div>                   
                </div>
				
			</div>
		</>
	);
}
