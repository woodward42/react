import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
	  <div>
		<Link to="/chat">Чат</Link>
		<br />
		<Link to="/profile">Профиль</Link>
	  </div>
	);
  };

export function Header() {
	return (
		<div className={styles.header}>
			<Menu />
		</div>
	);
}
