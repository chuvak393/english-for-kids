import { createContent } from "./createContent";
import { createCard } from './createCards';
import { sound } from './train';
import cards from './cards'

const hamburger: HTMLElement = document.querySelector('.icon');
const nav: HTMLElement = document.querySelector('.nav');
const container: HTMLElement = document.querySelector('.content__container');

function mainCategory(event: Event): void {
  let categoryName: string = event.target.firstChild.innerText;
  if (Boolean(localStorage.getItem('main'))) {
    if (event.target.className === 'card_invisible') {
      createContent(categoryName)
      localStorage.setItem('category', categoryName)
    }
  }
  else {
    let category = localStorage.getItem('category')
    categoryName = categoryName[0].toUpperCase() + categoryName.slice(1);
    let path = cards[category].find(item => item.word == `${categoryName}`);
    let sound = new Audio(path.audio);
    sound.play()
  }
}


function hamb(): void{
  if (hamburger.classList.contains('hamb-active')) {
    hamburger.classList.remove('hamb-active');
    nav.classList.remove('nav-active')
  } else {
    hamburger.classList.add('hamb-active');
    nav.classList.add('nav-active')
  }
}

function menu(event: Event): void{
  const categoryName: string = event.target.innerText.toLowerCase();
  createContent(categoryName)
  document.querySelectorAll('.navigation-links').forEach((elem) => {
    elem.className = 'navigation-links'
  });
  event.target.classList.add('navigation-links_active')
}


hamburger.addEventListener('click', hamb);
nav.addEventListener('click', menu);
container.addEventListener('click', mainCategory);
