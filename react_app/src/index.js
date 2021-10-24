import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ChatPage, Profile } from "./pages";
import { store } from "./store/create-store";
import { Provider } from "react-redux";
import {Header} from './components'

ReactDOM.render(
  <Provider store={store}>
	<BrowserRouter>
      <Header />
      <Switch>

        <Route path="/chat">
          <ChatPage />
        </Route>

        <Route exact path="/profile">
          <Profile />
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
  </Provider>,
	document.getElementById("root")
);

