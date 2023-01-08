import React from 'react';
import { useSelector } from 'react-redux';
import './comment.css'

export const CommentShow = ({comment}) => {
    const currentUser = useSelector((state)=> state.currentUser);
    const author = useSelector((state) => state.users[comment.userId]);
    if (!author || !currentUser){  // Handles the use case where the list of comments is fetched from the API beofre the list of users. 
        return null;
    }
    const userIsAuthor = author.id === currentUser.id;
    return (
    <div className={userIsAuthor ?'comment by-user': 'comment'}>
        <div className='author'>{author.name}</div>
        <div className='content'>{comment.content}</div>
    </div>);
};