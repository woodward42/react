import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ChatPage, Profile, GistsPage, LoginPage, SignUpPage } from "./pages";
import { store, persistor } from "./store/create-store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Header, PrivateRoute, PublicRoute  } from "./components";
import { PersistGate } from "redux-persist/integration/react";
import { firebaseApp } from "./api/firebase";
import { sessionSelector, onAuthStateChanged } from "./store/session";

const App = () => {
	// const [session, setSession] = useState(null);

	// useEffect(() => {
	// 	firebaseApp.auth().onAuthStateChanged((user) => {
	// 		if (user){
	// 			setSession(user)
	// 		}
	// 		else {
	// 			setSession(null)
	// 		}
	// 	})
	// },[])

	// console.log("session", session?.email);

	
	const session = useSelector(sessionSelector);
	const dispatch = useDispatch();
  
	useEffect(() => {
	  dispatch(onAuthStateChanged());
	}, [dispatch]);
  
	const isAuth = !!session?.email;
  
	return (
	  <>
		<Header session={session}/>
				<Switch>
					<PrivateRoute path="/chat" isAuth={isAuth}>
						<ChatPage />
					</PrivateRoute>

					<PrivateRoute exact path="/profile" isAuth={isAuth}>
						<Profile />
					</PrivateRoute>
					<PrivateRoute path="/gists" isAuth={isAuth}>
						<GistsPage />
					</PrivateRoute>
					<PublicRoute path="/login" isAuth={isAuth}>
						<LoginPage />
					</PublicRoute>
					<PublicRoute path="/signup" isAuth={isAuth}>
						<SignUpPage />
					</PublicRoute>
					<Route path="/">
						<h1>Меню</h1>
					</Route>

					<Route path="*">
						<h1>404 страница не найдена</h1>
						<Link to="/chat">Перейти в чат</Link>
					</Route>
				</Switch>
	  </>
	);
  };

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
