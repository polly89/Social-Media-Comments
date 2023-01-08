import { FETCH_POSTS, FETCH_POST } from '../actions/types';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return state.map((post) => 
        post.id === action.payload.id ? action.payload : post
     );
    default:
      return state;
  }
};
