import apiMyBlog from "../assets/img/api_myblog.png";
import appAgenda from "../assets/img/app_agenda.jpg";
import appHeroes from "../assets/img/app_heroes.png";
import appMyBlog from "../assets/img/app_myblog.png";
import appMyList from "../assets/img/app_mylist.jpg";
import appVideoClub from "../assets/img/app_videoclub.png";

import iconCss from "../assets/img/css_icon.png";
import iconHtml from "../assets/img/html_icon.png";
import iconJs from "../assets/img/js_icon.png";
import iconMongo from "../assets/img/mongo_icon.png";
import iconNode from "../assets/img/node_icon.png";
import iconReact from "../assets/img/react_icon.png";
import iconSass from "../assets/img/sass_icon.png";

export const dataPortfolio = [
    {
        id: 3,
        title: 'App Heroes',
        subtitle: 'Desarrollada en React.',
        icons: [iconJs, iconReact, iconSass],
        img: appHeroes,
        url: 'https://github.com/Dario-MF/app-heroes-react'
    },
    {
        id: 4,
        title: 'App MyBlog',
        subtitle: 'Desarrollada en React y Sass, consumo de API propia.',
        icons: [iconJs, iconReact, iconSass],
        img: appMyBlog,
        url: 'https://api-backend-myblog.herokuapp.com/'
    },
    {
        id: 5,
        title: 'App Mylist',
        subtitle: 'Desarrollada en Vanilla js, Sass y Firebase.',
        icons: [iconJs, iconHtml, iconCss, iconSass],
        img: appMyList,
        url: 'https://to-do-list-84ef2.firebaseapp.com/'
    },
    {
        id: 1,
        title: 'API MyBlog',
        subtitle: 'API desarrollada en Node y MongoDB.',
        icons: [iconMongo, iconNode, iconJs],
        img: apiMyBlog,
        url: 'https://github.com/Dario-MF/API-MyBlog'
    }, 
    {
        id: 6,
        title: 'App VideoClub',
        subtitle: 'Desarrollada en React y Sass.',
        icons: [iconJs, iconReact, iconSass],
        img: appVideoClub,
        url: 'https://github.com/Dario-MF/video-club'
    },
    {
        id: 2,
        title: 'App Agenda',
        subtitle: 'Desarrollada en Vanilla js y Sass.',
        icons: [iconJs, iconHtml, iconCss, iconSass],
        img: appAgenda,
        url: 'https://github.com/Dario-MF/agenda-contactos'
    }
];