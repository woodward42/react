import {
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import styles from "./Chat.module.css";

export function Chat({ title, selected, handleListItemClick }) {
	return (
		<ListItem
			disablePadding
			className={styles.item}
			button={true}
			selected={selected}
			onClick={handleListItemClick}
		>
			<ListItemButton>
				<ListItemText primary={title} />
			</ListItemButton>
		</ListItem>
	);
}
