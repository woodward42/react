import { SHOW_AGE } from "./types";

const initialState = {
    show_age: false,
}

export const ProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_AGE:
            return {...state, show_age: !state.show_age};

        default:
            return state;
    }
};
