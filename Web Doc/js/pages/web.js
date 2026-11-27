import {articles} from "../data/articles.js";

const mainContent = document.getElementsByClassName("main-content")[0];


mainContent.innerHTML = articles.map(article => article.render()).join("\n");