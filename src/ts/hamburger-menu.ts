import { createContent } from "./createContent";
import cards from './cards';

const hamburger: HTMLElement = document.querySelector('.icon');
const nav: HTMLElement = document.querySelector('.nav');
const container: HTMLElement = document.querySelector('.content__container');

function mainCategory(event: Event): void {
  if (Boolean(localStorage.getItem('main'))) {
    if (event.target.closest('.card').className === 'card') {
      let categoryName: string = event.target.closest('.card').id.toLowerCase();
      createContent(categoryName)
      localStorage.setItem('category', categoryName)
    }
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
  if (event.target.classList.contains('navigation-links')) {
    createContent(categoryName)
    document.querySelectorAll('.navigation-links').forEach((elem) => {
      elem.className = 'navigation-links'
      event.target.classList.add('navigation-links_active')
    });
    localStorage.setItem('category', categoryName)
  }
  else hamb()
}


hamburger.addEventListener('click', hamb);
nav.addEventListener('click', menu);
container.addEventListener('click', mainCategory);
