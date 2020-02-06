import React from 'react';

import Comment from '../Comment';

import './styles.css';

function Post({ post, comments }) {
    return (
        <div className="container">
            <div className="comment-principal">
                <div className="info-perfil">
                    <img src={post.author.avatar}/>
                    <div>
                        <strong>{post.author.name}</strong>
                        <small>{post.date}</small>
                    </div>
                </div>
                <div className="text-principal">
                    <p>{post.content}</p>
                </div>
            </div>
            <div className="divisor"></div>
            <div className="comments">
                {comments.map(comment => <Comment comment={comment}/>)}
            </div>
        </div>
    )
}

export default Post;