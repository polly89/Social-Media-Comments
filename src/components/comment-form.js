import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from "../actions";

export const CommentForm = ({post}) => {
  const [value, setValue] = useState("");
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(post.id, currentUser.id, value))
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Add a Comment"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn-small">Submit</button>
      </form>
    </div>
  );
};
