import React from 'react';

import './styles.css';

function Comment() {
    return (
        <div className="comment">
            <img src="https://pbs.twimg.com/profile_images/1214281987781021696/KZJM2oCm_400x400.jpg"/>
            <p>
                <strong>Diego Fernandes</strong>
                A Rocketseat está sempre em busca de novos membros para o time,
                e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80%
                do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você 
                tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord!
            </p>
        </div>
    )
}

export default Comment;

