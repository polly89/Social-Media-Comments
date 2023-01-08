import React from 'react';
import { CommentShow } from './comment-show';

 export const CommentList = ({comments}) => {
     const renderedComments = comments.map((comment) => {
         return <CommentShow key={comment.id} comment={comment}/>;
     });
     return <div className='comment-list'>{renderedComments}</div>
 };