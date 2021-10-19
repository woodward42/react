import { SHOW_AGE } from "./types";

export const ProfileReducer = (state = { show_age: false }, action) => {
    switch(action.type){
        case SHOW_AGE:
            return {...state, show_age: !state.show_age};

        default:
            return state;
    }
};
