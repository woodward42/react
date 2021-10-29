import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ChatPage, Profile, GistsPage } from "./pages";
import { store, persistor } from "./store/create-store";
import { Provider } from "react-redux";
import { Header } from "./components";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/chat">
						<ChatPage />
					</Route>

					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route path="/gists">
						<GistsPage />
					</Route>
					<Route path="/">
						<h1>Меню</h1>
					</Route>

					<Route path="*">
						<h1>404 страница не найдена</h1>
						<Link to="/chat">Перейти в чат</Link>
					</Route>
				</Switch>
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
