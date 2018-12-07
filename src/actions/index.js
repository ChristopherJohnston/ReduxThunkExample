import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const FETCH_POSTS_AND_USERS = 'FETCH_POSTS_AND_USERS';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=>dispatch(fetchUser(id)))
        .value();
};

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: FETCH_POSTS, payload: response.data});
}

export const FETCH_USER = 'FETCH_USER';

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data});
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: FETCH_USER, payload: response.data});
// });

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

export const SET_FAVOURITE = 'SET_FAVOURITE';

export const setFavourite = (id, favouriteState) => ({
    type: SET_FAVOURITE,
    payload: {id, favouriteState}
});

export const FETCH_ICONS = 'FETCH_ICONS';

export const fetchIcons = () => ({
    type: FETCH_ICONS,
    payload: {
        1: {isFavourite: true, name: "Icon 1", url: "img_avatar.png"},
        2: {isFavourite: false, name: "Icon 2", url: "img_avatar.png"},
        3: {isFavourite: false, name: "Icon 3", type: "fontawesome", icon: ['fab', 'facebook'], style: {color: '#3b5998', backgroundColor: '#eeeeee'}}, 
        4: {isFavourite: false, name: "Icon 3", type: "fontawesome", icon: ['fab', 'react'], style: {color: '#00d8ff', backgroundColor: '#666666'}} 
    }
});

