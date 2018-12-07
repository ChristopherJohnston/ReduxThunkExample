import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import usersReducer from "./usersReducer";
import iconsReducer from "./iconsReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    icons: iconsReducer
});