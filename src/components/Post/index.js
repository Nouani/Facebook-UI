import React from 'react';

import Comment from '../Comment';

import './styles.css';

function Post() {
    return (
        <div className="container">
            <div className="comment-principal">
                <div className="info-perfil">
                    <img src="https://user-images.githubusercontent.com/49238044/73906947-69226980-4883-11ea-9a1d-b705aceb918d.jpg"/>
                    <div>
                        <strong>Júlio Alcantara</strong>
                        <small>04 Jun 2019</small>
                    </div>
                </div>
                <div className="text-principal">
                    <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
                </div>
            </div>
            <div className="divisor"></div>
            <div className="comments">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}

export default Post;