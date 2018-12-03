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
