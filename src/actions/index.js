import { FETCH_USERS, FETCH_CURRENT_USER, FETCH_POSTS, FETCH_POST } from "./types";
import axios from "axios";

export const createComment = (postId, userId, content) => async (dispatch) => {
  await axios.post(`/comments`, {
    postId,
    userId,
    content,
  });
  const res = await axios.get(`/posts/${postId}?_embed=comments`);
  dispatch({
    type: FETCH_POST,
    payload: res.data
  })
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get("/posts?_embed=comments");

  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await axios.get("/current-user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data,
  });
};

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("/users");

  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};
