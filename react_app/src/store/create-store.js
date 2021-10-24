import {createStore, combineReducers} from "redux";
import { ProfileReducer } from "./profile";
import { conversationsReducer } from "./conversations";

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
        conversations: conversationsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);