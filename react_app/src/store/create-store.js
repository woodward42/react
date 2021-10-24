import {createStore, combineReducers} from "redux";
import { ProfileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
        conversations: conversationsReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);