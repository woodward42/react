import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";

const exit = () => {
	firebaseApp.auth().signOut();
};

const Menu = ({ isAuth }) => {
	return (
		<div style={{ display: "flex", justifyContent: "space-around" }}>
			{isAuth && (
				<>
					<p>
						<Link to="/chat">Чат</Link>
					</p>

					<p>
						<Link to="/profile">Профиль</Link>
					</p>

					<p>
						<Link to="/gists">Gists</Link>
					</p>

					<button onClick={exit} style={{ alignSelf: "center" }}>
						Выйти
					</button>
				</>
			)}
			{!isAuth && (
				<>
				<p>
				<Link to="/login">Войти</Link>
			</p>

			<p>
				<Link to="/signup">Зарегистрироваться</Link>
			</p>
				</>
			)}
			
		</div>
	);
};

export function Header({ session }) {
	const isAuth = !!session?.email;

	return (
		<div className={styles.header}>
			<h3>Пользователь: {session?.email || ""}</h3>
			<hr />
			<Menu isAuth={isAuth} />
		</div>
	);
}
