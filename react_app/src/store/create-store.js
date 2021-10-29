import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { ProfileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { BotSendAnswerMessage } from "./middlewares";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getGistsApi } from "../api";
import { gistsReducer } from "./gists";

const pConfig = {
	key: "react-app",
	storage,
	blacklist: ["messages"],
	whitelist: ["profile", "conversations"],
};

const pReducer = persistReducer(
	pConfig,
	combineReducers({
		profile: ProfileReducer,
		conversations: conversationsReducer,
		messages: messagesReducer,
		gists: gistsReducer,
	})
);

export const store = createStore(
	pReducer,
	compose(
		applyMiddleware(
			thunk.withExtraArgument({ getGistsApi }),
			BotSendAnswerMessage
		)
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export const persistor = persistStore(store);
