import React, { Component } from 'react';

import Post from '../Post';

import './styles.css';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Matheus Seiji",
              avatar: "https://pbs.twimg.com/profile_images/1098735685350162433/1DNOjdx6_400x400.jpg"
            },
            date: "04 Jun 2019",
            content: "Bom dia a todos, venho por meio desse post dizer que Biologia jamais ira superar Física",
            comments: [
              {
                id: 1,
                author: {
                  name: "Rodrigo Smith",
                  avatar: "https://user-images.githubusercontent.com/49238044/73907349-bd7a1900-4884-11ea-9b3a-5204b1e66007.jpg"
                },
                content: "Quer apostar?"
              },
              {
                id: 2,
                author: {
                  name: "Rafael Romanholi",
                  avatar: "https://avatars3.githubusercontent.com/u/49032796?s=400&v=4"
                },
                content: "Concordo Seijão! Mas Física jamais ira superar mateca"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Nicolas Oliveira",
              avatar: "https://avatars1.githubusercontent.com/u/48627492?s=400&v=4"
            },
            date: "04 Jun 2019",
            content: "E aí galera, bora fazer um mod de minecraft?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Nicolas Schmidt",
                  avatar: "https://avatars1.githubusercontent.com/u/37451175?s=400&v=4"
                },
                content: "Ja procurou uma psicologa? Java é mais do que para fazer mods de Minecraft"
              },
              {
                id: 2,
                author: {
                  name: "Gabriel Arruda",
                  avatar: "https://avatars0.githubusercontent.com/u/47468017?s=400&v=4"
                },
                content: "É isso ai Schmidt. Sendo assim, vamo de Sockets?"
              },
              {
                id: 3,
                author: {
                  name: "Felipe Pires",
                  avatar: "https://avatars2.githubusercontent.com/u/48968398?s=400&v=4"
                },
                content: "Sai dessa Arruda. Vai ser feliz :)"
              }
            ]
          },
          {
            id: 3,
            author: {
              name: "Nicolas Duarte",
              avatar: "https://pbs.twimg.com/profile_images/1214281987781021696/KZJM2oCm_400x400.jpg"
            },
            date: "04 Jun 2019",
            content: "Quem vem de taquaras sexta?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Guilherme Brentan",
                  avatar: "https://user-images.githubusercontent.com/49238044/73906947-69226980-4883-11ea-9a1d-b705aceb918d.jpg"
                },
                content: "Opa, to aqui te esperando Angelão"
              },
            ]
          },
        ]
      };

    render() {
        return (
            <>
                <main>
                    <Post />
                </main>
            </>
        )
    }
}

export default PostList;