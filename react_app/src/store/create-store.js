import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { ProfileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { BotSendAnswerMessage } from "./middlewares";

export const store = createStore(
	combineReducers({
		profile: ProfileReducer,
		conversations: conversationsReducer,
		messages: messagesReducer,
	}),
	compose(
        applyMiddleware(thunk, BotSendAnswerMessage),
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
