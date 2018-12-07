import { SET_FAVOURITE } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            return {...state, [action.payload.id]: action.payload.favouriteState};
        default:
            return state;
    }
};