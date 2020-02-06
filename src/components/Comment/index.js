import React from 'react';

import './styles.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <img src={comment.author.avatar}/>
            <p>
                <strong>{comment.author.name}</strong>
                {comment.content}
            </p>
        </div>
    )
}

export default Comment;

