import { SET_FAVOURITE, FETCH_ICONS } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_FAVOURITE:
            const {id, favouriteState} = action.payload;
            return {...state, [id]: {...state[id], isFavourite: favouriteState}};
        case FETCH_ICONS:
            return action.payload
        default:
            return state;
    }
};