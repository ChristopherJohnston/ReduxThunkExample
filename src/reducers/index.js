import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";
import favouritesReducer from "./favouritesReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    favourites: favouritesReducer
});