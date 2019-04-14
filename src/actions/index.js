import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // User _ to get unique userIds from the posts.
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => {
    dispatch(fetchUser(id));
  });

  // // lodash refactor using _.chain()
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
