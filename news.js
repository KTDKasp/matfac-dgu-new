// async function getData() {
//     const res = await fetch("https://655b2cc4ab37729791a8a6a5.mockapi.io/news");
//     const data = await res.json();
//     return await data;
// }
'use strict';

let data = [
    {
        "title": "На факультете прошла викторина Своя Игра",
        "date": "13.11.2023",
        "imageURL": "../../img/news/ourgame.jpg"
    },
    {
        "title": "На факультете был проведен турнир по шахматам среди первокурсников.",
        "date": "12.11.2023",
        "imageURL": "../../img/news/chess.jpg"
    },
    {
        "title": "Встреча студентов и преподавателей факультета МиКН с афганским математиком.",
        "date": "30.10.2023",
        "imageURL": "../../img/news/afgmath.jpg"
    },
    {
        "title": "Игра Мафия была проведена на факульете",
        "date": "25.10.2023",
        "imageURL": "../../img/news/mafia.jpg"
    },    {
        "title": "На факультете прошла викторина Своя Игра",
        "date": "13.11.2023",
        "imageURL": "../../img/news/ourgame.jpg"
    },
    {
        "title": "На факультете был проведен турнир по шахматам среди первокурсников.",
        "date": "12.11.2023",
        "imageURL": "../../img/news/chess.jpg"
    },
    {
        "title": "Встреча студентов и преподавателей факультета МиКН с афганским математиком.",
        "date": "30.10.2023",
        "imageURL": "../../img/news/afgmath.jpg"
    },
    {
        "title": "Игра Мафия была проведена на факульете",
        "date": "25.10.2023",
        "imageURL": "../../img/news/mafia.jpg"
    },    {
        "title": "На факультете прошла викторина Своя Игра",
        "date": "13.11.2023",
        "imageURL": "../../img/news/ourgame.jpg"
    },
    {
        "title": "На факультете был проведен турнир по шахматам среди первокурсников.",
        "date": "12.11.2023",
        "imageURL": "../../img/news/chess.jpg"
    },
    {
        "title": "Встреча студентов и преподавателей факультета МиКН с афганским математиком.",
        "date": "30.10.2023",
        "imageURL": "../../img/news/afgmath.jpg"
    },
    {
        "title": "Игра Мафия была проведена на факульете",
        "date": "25.10.2023",
        "imageURL": "../../img/news/mafia.jpg"
    } 
];

let newsWrapper = document.querySelector(".news__wrapper");
for (let news of data) {
    newsWrapper.innerHTML += `
        <div class="news__card">
            <div class="news__img">
                <img src=${news.imageURL} alt="Картинка новости">
            </div>
            <div class="news__date">${news.date}</div>
            <h3 class="news__description">${news.title}</h3>
        </div>
    `
}
