import { createContent } from "./createContent";

const hamburger: HTMLElement = document.querySelector('.icon');
const nav: HTMLElement = document.querySelector('.nav');
console.log(main);

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
  const eventTarget: string = event.target.innerText.toLowerCase();
  createContent(eventTarget)
}

hamburger.addEventListener('click', hamb);
nav.addEventListener('click', menu)