import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { ChatPage, Profile } from "./pages";

ReactDOM.render(
	<BrowserRouter>
      <Switch>

        <Route path="/chat">
          <ChatPage />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route path="*">
          <h1>Меню</h1>
          <Link to="/chat">Перейти в чат</Link><br />
          <Link to="/profile">Перейти в профиль</Link>
        </Route>


        <Route path="*">
          <h1>404 страница не найдена</h1>
          <Link to="/chat">Перейти в чат</Link>
        </Route>

      </Switch>
  </BrowserRouter>,
	document.getElementById("root")
);

