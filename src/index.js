import createHeader from './modules/header.js';
import createMainHome from './modules/home.js';
import createMainMenu from './modules/menu.js';
import createMainAbout from './modules/about.js';

const content = document.getElementById('content');

content.appendChild(createHeader());
content.appendChild(createMainHome());

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');

home.addEventListener('click', function()   {
    content.removeChild(document.querySelector('.main'));
    content.appendChild(createMainHome());
})

menu.addEventListener('click', function()   {
    content.removeChild(document.querySelector('.main'));
    content.appendChild(createMainMenu());
})

about.addEventListener('click', function()   {
    content.removeChild(document.querySelector('.main'));
    content.appendChild(createMainAbout());
})