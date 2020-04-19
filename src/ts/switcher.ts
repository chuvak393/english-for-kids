const switcher: HTMLElement = document.querySelector('.switch-btn');
const hamburger: HTMLElement = document.querySelector('.hamburger');
const nav: HTMLElement = document.querySelector('.nav');

export default function switchOn(): void{
  if (switcher.classList.contains('switch-on')) {
    switcher.classList.remove('switch-on');
    localStorage.setItem('play', `${false}`)
    hamburger.classList.remove('hamburger-play');
    nav.classList.remove('nav-active-play');
  } else {
    switcher.classList.add('switch-on');
    localStorage.setItem('play', `${true}`)
    hamburger.classList.add('hamburger-play');
    nav.classList.add('nav-active-play');
  }
  console.log(localStorage.getItem('play'))
}
switcher.addEventListener('click', switchOn);
