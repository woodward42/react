import {createStore, combineReducers} from "redux";
import { ProfileReducer } from "./profile";

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
    })
);